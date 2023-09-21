import Container from '@mui/material/Container';
import Image from 'next/image';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid } from '@mui/material/';
async function getStageStanding() {
  const res = await fetch(
    `https://competition.tl.prod.c0d1um.io/thaileague/api/stage-standing-public/?tournament=175`
  );
  return res.json();
}
export default async function tables() {
  const data = await getStageStanding();
  return (
    <Container maxWidth='lg'>
      <h1>Tables</h1>
      <TableContainer sx={{ boxShadow: 'none' }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead sx={{ height: '31px' }}>
            <TableRow sx={{ background: '#fbfafa' }}>
              <TableCell align='center'>Position</TableCell>
              <TableCell>Club</TableCell>
              <TableCell align='center'>Played</TableCell>
              <TableCell align='center'>Won</TableCell>
              <TableCell align='center'>Drawn</TableCell>
              <TableCell align='center'>Lost</TableCell>
              <TableCell align='center'>GF</TableCell>
              <TableCell align='center'>GA</TableCell>
              <TableCell align='center'>GD</TableCell>
              <TableCell align='center'>Points</TableCell>
              <TableCell align='center'>Form</TableCell>
              <TableCell align='center'>Next</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any, index: number) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row' align='center'>
                  {index + 1}
                </TableCell>
                <TableCell style={{ display: 'flex', alignItems: 'center' }}>
                  <Image
                    src={row.tournament_team_logo}
                    alt={row.tournament_team_name_en}
                    width={32}
                    height={32}
                  />
                  <Box sx={{ marginLeft: '16px' }} display='inline'>
                    {row.tournament_team_name_en}
                  </Box>
                </TableCell>
                <TableCell align='center'>{row.match_play}</TableCell>
                <TableCell align='center'>{row.win}</TableCell>
                <TableCell align='center'>{row.draw}</TableCell>
                <TableCell align='center'>{row.lose}</TableCell>
                <TableCell align='center'>{row.goal_for}</TableCell>
                <TableCell align='center'>{row.goal_against}</TableCell>
                <TableCell align='center'>{row.goal_difference}</TableCell>
                <TableCell align='center'>
                  <b>{row.point}</b>
                </TableCell>
                <TableCell align='center'>
                  <Grid container spacing={1}>
                    {row.last_match_result.map(
                      (match: any, matchIndex: number) => {
                        const color: string =
                          match.result === 'W'
                            ? '#00db74'
                            : match.result === 'D'
                            ? '#c3b3c5'
                            : '#e0005e';
                        return (
                          <Grid item key={matchIndex}>
                            <Box
                              sx={{
                                background: color,
                                width: '26px',
                                height: '26px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                              }}
                              display='inline'
                            >
                              {match.result}
                            </Box>
                          </Grid>
                        );
                      }
                    )}
                  </Grid>
                </TableCell>
                <TableCell align='center'>
                  <Image
                    src={
                      row.next_match.home_team_name_en ===
                      row.tournament_team_name_en
                        ? row.next_match.away_team_logo
                        : row.next_match.home_team_logo
                    }
                    width={25}
                    height={25}
                    alt={row.home_team_name_en}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

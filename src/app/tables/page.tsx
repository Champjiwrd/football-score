import Container from '@mui/material/Container';
import Image from 'next/image';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid, Typography, Button } from '@mui/material/';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import CustomTooltip from '../components/customTooltip';
import { useState } from 'react';

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
              <TableCell align='center'>
                <b>Position</b>
              </TableCell>
              <TableCell>
                <b>Club</b>
              </TableCell>
              <TableCell align='center'>
                <b>Played</b>
              </TableCell>
              <TableCell align='center'>
                <b>Won</b>
              </TableCell>
              <TableCell align='center'>
                <b>Drawn</b>
              </TableCell>
              <TableCell align='center'>
                <b>Lost</b>
              </TableCell>
              <TableCell align='center'>
                <b>GF</b>
              </TableCell>
              <TableCell align='center'>
                <b>GA</b>
              </TableCell>
              <TableCell align='center'>
                <b>GD</b>
              </TableCell>
              <TableCell align='center'>
                <b>Points</b>
              </TableCell>
              <TableCell
                sx={{ display: { xs: 'none', lg: 'table-cell' } }}
                align='center'
              >
                <b>Form</b>
              </TableCell>
              <TableCell align='center'>
                <b>Next</b>
              </TableCell>
              <TableCell align='center'>
                <b>More</b>
              </TableCell>
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
                <TableCell>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src={row.tournament_team_logo}
                      width={32}
                      height={32}
                      alt={row.tournament_team_name_en}
                    />
                    <Box sx={{ marginLeft: '16px' }} display='inline'>
                      {row.tournament_team_name_en}
                    </Box>
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
                <TableCell
                  sx={{ display: { xs: 'none', lg: 'table-cell' } }}
                  align='center'
                >
                  <Grid container spacing={1}>
                    {row.last_match_result.map(
                      (match: any, matchIndex: number) => {
                        return (
                          <Grid item key={matchIndex}>
                            {match && (
                              <CustomTooltip
                                teamName={row.tournament_team_name_en}
                                teamLogo={row.tournament_team_logo}
                                match={match}
                              />
                            )}
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
                <TableCell align='center'>
                  <KeyboardArrowDownIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

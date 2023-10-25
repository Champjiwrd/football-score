'use client';
import Image from 'next/image';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  Grid,
  TableBody,
  Box,
  useMediaQuery,
  Paper,
  Stack,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NextMatch from '../nextMatchTooltip';
import CustomTooltip from '../customTooltip';
import { useTheme } from '@mui/material/styles';

interface LeagueTablesProps {
  data: any;
}

const LeagueTables: React.FC<LeagueTablesProps> = ({ data }) => {
  const theme = useTheme();
  // console.log(theme);
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const headers: { title: string; short?: string }[] = [
    {
      title: 'Position',
    },
    {
      title: 'Club',
    },
    {
      title: 'Played',
      short: 'Pl',
    },
    {
      title: 'Won',
      short: 'W',
    },
    {
      title: 'Drawn',
      short: 'D',
    },
    {
      title: 'Lost',
      short: 'L',
    },
    {
      title: 'GF',
    },
    {
      title: 'GA',
    },
    {
      title: 'GD',
    },
    {
      title: 'Points',
      short: 'Pts',
    },
    {
      title: 'Form',
    },
    {
      title: 'Next',
    },
    {
      title: 'More',
    },
  ];
  return (
    <TableContainer sx={{ boxShadow: 'none', width: '100%' }} component={Paper}>
      <Table aria-label='simple table'>
        <TableHead sx={{ height: '31px' }}>
          <TableRow sx={{ background: '#fbfafa' }}>
            {/* {headers.map((header, indexHeader) => (
              <TableCell key={indexHeader} align='center'>
                <Typography sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
                  <b>{matches ? header.short : header.title}</b>
                </Typography>
              </TableCell>
            ))} */}
            <TableCell align='center'>
              <Typography sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
                <b>{matches ? '' : 'Position'}</b>
              </Typography>
            </TableCell>
            <TableCell>
              <b>Club</b>
            </TableCell>
            <TableCell align='center'>
              <b>{matches ? 'Pl' : 'Played'}</b>
            </TableCell>
            <TableCell align='center'>
              <b>{matches ? 'W' : 'Won'}</b>
            </TableCell>
            <TableCell align='center'>
              <b>{matches ? 'D' : 'Drawn'}</b>
            </TableCell>
            <TableCell align='center'>
              <b>{matches ? 'L' : 'Lost'}</b>
            </TableCell>
            <TableCell
              sx={{ display: { xs: 'none', sm: 'table-cell' } }}
              align='center'
            >
              <b>GF</b>
            </TableCell>
            <TableCell
              sx={{ display: { xs: 'none', sm: 'table-cell' } }}
              align='center'
            >
              <b>GA</b>
            </TableCell>
            <TableCell align='center'>
              <b>GD</b>
            </TableCell>
            <TableCell align='center'>
              <b>{matches ? 'Pts' : 'Points'}</b>
            </TableCell>
            <TableCell
              sx={{ display: { xs: 'none', lg: 'table-cell' } }}
              align='center'
            >
              <b>Form</b>
            </TableCell>
            <TableCell
              sx={{ display: { xs: 'none', lg: 'table-cell' } }}
              align='center'
            >
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
                  {!matches && (
                    <Box sx={{ marginLeft: '16px' }} display='inline'>
                      {row.tournament_team_name_en}
                    </Box>
                  )}
                </Box>
              </TableCell>
              <TableCell align='center'>{row.match_play}</TableCell>
              <TableCell align='center'>{row.win}</TableCell>
              <TableCell align='center'>{row.draw}</TableCell>
              <TableCell align='center'>{row.lose}</TableCell>
              <TableCell
                sx={{ display: { xs: 'none', sm: 'table-cell' } }}
                align='center'
              >
                {row.goal_for}
              </TableCell>
              <TableCell
                sx={{ display: { xs: 'none', sm: 'table-cell' } }}
                align='center'
              >
                {row.goal_against}
              </TableCell>
              <TableCell align='center'>{row.goal_difference}</TableCell>
              <TableCell align='center'>
                <b>{row.point}</b>
              </TableCell>
              <TableCell
                sx={{ display: { xs: 'none', lg: 'table-cell' } }}
                align='center'
              >
                <Stack direction='row' alignItems='center' spacing={0.5}>
                  {row.last_match_result
                    .slice(0, 5)
                    .map((match: any, matchIndex: number) => {
                      return (
                        <CustomTooltip
                          key={matchIndex}
                          teamName={row.tournament_team_name_en}
                          teamLogo={row.tournament_team_logo}
                          match={match}
                        />
                      );
                    })}
                </Stack>
              </TableCell>
              <TableCell
                sx={{ display: { xs: 'none', lg: 'table-cell' } }}
                align='center'
              >
                <NextMatch
                  teamName={row.tournament_team_name_en}
                  match={row.next_match}
                />
              </TableCell>
              <TableCell align='center'>
                <KeyboardArrowDownIcon sx={{ cursor: 'pointer' }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeagueTables;

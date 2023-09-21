'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import moment from 'moment';
import Image from 'next/image';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#dadde9',
    // backgroundColor: '#ffffff',
    // color: 'rgba(0, 0, 0, )',
    // border: '1px solid #dadde9',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    color: 'rgba(0, 0, 0, 1)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

interface CustomizedTooltipsProps {
  match: {
    date: string;
    time: string;
    result: string;
    home_team?: string;
    home_team_en?: string;
    home_team_id?: number;
    home_team_logo?: string;
    away_team?: string;
    away_team_en?: string;
    away_team_id?: number;
    away_team_logo?: string;
    away_goal_count: number;
    home_goal_count: number;
  };
  teamName: string;
  teamLogo: string;
}

const CustomizedTooltips: React.FC<CustomizedTooltipsProps> = ({
  match,
  teamName,
  teamLogo,
}) => {
  let color: string = '';
  color =
    match.result === 'W'
      ? '#00db74'
      : match.result === 'D'
      ? '#c3b3c5'
      : '#e0005e';
  const matchDate = moment(`${match.date} ${match.time}`).format(
    'dddd D MMMM YYYY'
  );
  console.log(teamLogo);
  console.log(teamName);
  console.log(match);
  const logoSize = 40;
  return (
    <div>
      <HtmlTooltip
        placement='top-start'
        arrow
        title={
          <React.Fragment>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px',
              }}
            >
              <Box sx={{ fontSize: '10px' }}>{matchDate}</Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '10px',
                }}
              >
                <Box>
                  {match.home_team_en && match.home_team_logo ? (
                    <Image
                      src={match.home_team_logo}
                      width={logoSize}
                      height={logoSize}
                      alt='home team'
                    />
                  ) : (
                    <Image
                      src={teamLogo}
                      width={logoSize}
                      height={logoSize}
                      alt='home team'
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    color: 'white',
                    backgroundColor: '#37003D',
                    padding: '5px',
                    borderRadius: '4px',
                    marginX: '5px',
                    paddingX: '10px',
                  }}
                >
                  {match.home_goal_count} - {match.away_goal_count}
                </Box>
                <Box>
                  {match.away_team_en && match.away_team_logo ? (
                    <Image
                      src={match.away_team_logo}
                      width={logoSize}
                      height={logoSize}
                      alt={match.away_team_en}
                    />
                  ) : (
                    <Image
                      src={teamLogo}
                      width={logoSize}
                      height={logoSize}
                      alt='away team'
                    />
                  )}
                </Box>
              </Box>
            </Box>
            {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"} */}
          </React.Fragment>
        }
        placement='top'
      >
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
            cursor: 'pointer',
          }}
          display='inline'
        >
          {match.result}
        </Box>
      </HtmlTooltip>
    </div>
  );
};
export default CustomizedTooltips;

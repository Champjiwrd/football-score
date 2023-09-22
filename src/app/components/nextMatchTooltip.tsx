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
    padding: 0,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

interface NextMatchProps {
  match: {
    id: number;
    home_team: number;
    home_team_name: string;
    home_team_name_en: string;
    home_team_logo: string;
    away_team: number;
    away_team_name: string;
    away_team_logo: string;
    away_team_name_en: string;
    start_date: string;
    start_time: string;
  };
  teamName: string;
}

const NextMatch: React.FC<NextMatchProps> = ({ match, teamName }) => {
  const matchDate = moment(`${match.start_date} ${match.start_time}`).format(
    'dddd D MMMM YYYY'
  );
  const timeStart = moment(`${match.start_date} ${match.start_time}`).format(
    'HH:mm'
  );
  const logoSize = 40;
  return (
    <HtmlTooltip
      placement='top-end'
      arrow
      title={
        <React.Fragment>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px',
              '&:hover': {
                opacity: 1,
                color: 'white',
                backgroundImage:
                  'linear-gradient(137.27deg, #F90606 0.85%, #B40606 91.08%, #500404 150.26%)',
              },
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
                {match.home_team_name_en && match.home_team_logo && (
                  <Image
                    src={match.home_team_logo}
                    width={logoSize}
                    height={logoSize}
                    alt='home team'
                  />
                )}
              </Box>
              <Box
                sx={{
                  // color: 'white',
                  padding: '5px',
                  borderRadius: '4px',
                  marginX: '5px',
                  // paddingX: '10px',
                  border: '1px solid #dadde9',
                }}
              >
                <div>{timeStart}</div>
              </Box>
              <Box>
                {match.away_team_name_en && match.away_team_logo && (
                  <Image
                    src={match.away_team_logo}
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
    >
      <Box
        sx={{
          background: 'white',
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
        <Image
          src={
            match.home_team_name_en === teamName
              ? match.away_team_logo
              : match.home_team_logo
          }
          width={25}
          height={25}
          alt={teamName}
        />
        {/* {match.result} */}
      </Box>
    </HtmlTooltip>
  );
};
export default NextMatch;

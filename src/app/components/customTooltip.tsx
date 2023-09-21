'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
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
    away_team: string;
    away_team_en: string;
    away_team_id: number;
    away_team_logo: string;
    away_goal_count: number;
    home_goal_count: number;
  };
}

const CustomizedTooltips: React.FC<CustomizedTooltipsProps> = ({ match }) => {
  let color: string = '';
  if (match)
    color =
      match.result === 'W'
        ? '#00db74'
        : match.result === 'D'
        ? '#c3b3c5'
        : '#e0005e';
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color='inherit'>{match.date}</Typography>
            {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"} */}
          </React.Fragment>
        }
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

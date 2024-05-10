import React, { useState } from 'react'
import {IconButton,Button,Badge,CardActions} from '@mui/material';
import { styled } from '@mui/material/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export const Counter = () => {
    let [like,setLike]= useState(0)
    let [dislike,setDisLike]= useState(0)
  return (
    <CardActions>
         <IconButton fontSize="small" color="success" aria-label="like" onClick={() => setLike(like+1)}>
            <StyledBadge badgeContent={like} color="success">
            <ThumbUpIcon />
            </StyledBadge>
        </IconButton>
        <IconButton fontSize="small" color="error" aria-label="dislike" onClick={() => setDisLike(dislike+1)}>
            <StyledBadge badgeContent={dislike} color="error">
            <ThumbDownIcon />
            </StyledBadge>
        </IconButton>
    </CardActions>
  )
}

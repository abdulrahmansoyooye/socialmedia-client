import { Divider, Typography } from "@mui/material";
import Friends from "components/Friends";
import WidgetWrapper from "components/WidgetWrapper";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const FriendWidget = ({ userId }) => {
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const { _id } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <WidgetWrapper mt="1rem">
      <Typography variant="h4" fontWeight="600" m="1rem 0">
        Your Friends
      </Typography>
      <Divider />
      {friends.length === 0 ? (
        <Typography variant="h5" m="1rem 0">
          No friends Yet
        </Typography>
      ) : (
        friends.map((friend) => (
          <>
            <Friends
              key={friend._id}
              friendId={friend._id}
              name={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.occupation}
              userPicturePath={friend.picturePath}
            />
            <Divider />
          </>
        ))
      )}
    </WidgetWrapper>
  );
};

export default FriendWidget;

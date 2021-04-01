import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { MessageUser } from "./message-user";

export function ListMessageUser({ scrollToTop, scrollToBottom, ...props }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        onScrollAnimationEnd={(e) => {
          console.log(e);
        }}
      >
        {ListMessageUserData.map((item, index) => {
          return (
            <View key={index}>
              <MessageUser
                avatar={item.avatar}
                displayName={item.displayName}
                lastMessage={item.lastMessage}
                timeLastMessage={item.timeLastMessage}
                status={item.status}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const ListMessageUserData = [
  {
    avatar: "https://s0.linkimage.com/images/002/2142/normal_53644.jpg",
    displayName: "Taylor Switch",
    lastMessage: "Hello, My name is Taylor Switch",
    timeLastMessage: new Date(),
    status: true,
  },
  {
    avatar: "https://s2.linkimage.com/images/017/17131/normal_41813.jpg",
    displayName: "Rose",
    lastMessage: "Hello, My name is Rose, a member at BlackPink",
    timeLastMessage: new Date(),
    status: false,
  },
  {
    avatar: "https://s3.linkimage.com/images/028/28969/normal_27867.jpg",
    displayName: "Taylor Switch",
    lastMessage: "Hello, My name is Batman, I'm Rich man",
    timeLastMessage: new Date(),
    status: true,
  },
  {
    avatar: "https://s0.linkimage.com/images/002/2142/normal_53644.jpg",
    displayName: "Taylor Switch",
    lastMessage: "Hello, My name is Taylor Switch",
    timeLastMessage: new Date(),
    status: true,
  },
  {
    avatar: "https://s2.linkimage.com/images/017/17131/normal_41813.jpg",
    displayName: "Rose",
    lastMessage: "Hello, My name is Rose, a member at BlackPink",
    timeLastMessage: new Date(),
    status: false,
  },
  {
    avatar: "https://s3.linkimage.com/images/028/28969/normal_27867.jpg",
    displayName: "Taylor Switch",
    lastMessage: "Hello, My name is Batman, I'm Rich man",
    timeLastMessage: new Date(),
    status: true,
  },
  {
    avatar: "https://s0.linkimage.com/images/002/2142/normal_53644.jpg",
    displayName: "Taylor Switch",
    lastMessage: "Hello, My name is Taylor Switch",
    timeLastMessage: new Date(),
    status: true,
  },
  {
    avatar: "https://s2.linkimage.com/images/017/17131/normal_41813.jpg",
    displayName: "Rose",
    lastMessage: "Hello, My name is Rose, a member at BlackPink",
    timeLastMessage: new Date(),
    status: false,
  },
  {
    avatar: "https://s3.linkimage.com/images/028/28969/normal_27867.jpg",
    displayName: "Taylor Switch",
    lastMessage: "Hello, My name is Batman, I'm Rich man",
    timeLastMessage: new Date(),
    status: true,
  },
  {
    avatar: "https://s0.linkimage.com/images/002/2142/normal_53644.jpg",
    displayName: "Taylor Switch",
    lastMessage: "Hello, My name is Taylor Switch",
    timeLastMessage: new Date(),
    status: true,
  },
  {
    avatar: "https://s2.linkimage.com/images/017/17131/normal_41813.jpg",
    displayName: "Rose",
    lastMessage: "Hello, My name is Rose, a member at BlackPink",
    timeLastMessage: new Date(),
    status: false,
  },
  {
    avatar: "https://s3.linkimage.com/images/028/28969/normal_27867.jpg",
    displayName: "Taylor Switch",
    lastMessage: "Hello, My name is Batman, I'm Rich man",
    timeLastMessage: new Date(),
    status: true,
  },
];

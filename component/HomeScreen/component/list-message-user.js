import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import { MessageUser } from "./message-user";
import { Icon } from "react-native-elements";
import { Inputs } from "../../share/form/input";

export function ListMessageUser({
  scrollToTop,
  scrollToBottom,
  navigation,
  ...props
}) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        onScrollAnimationEnd={(e) => {
          console.log(e);
        }}
      >
        <View style={tailwind(" pt-3  px-2 bg-white")}>
          <Inputs
            placeholder="Search"
            keyboardType="email-address"
            leftIcon={<Icon name="search" type="ionicon" color="#D1D5DB" />}
            onChanged={(e) => {}}
          />
        </View>
        {ListMessageUserData.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ChatScreen", { ...item })}
              >
                <MessageUser
                  avatar={item.avatar}
                  displayName={item.displayName}
                  lastMessage={item.lastMessage}
                  timeLastMessage={item.timeLastMessage}
                  status={item.status}
                />
              </TouchableOpacity>
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

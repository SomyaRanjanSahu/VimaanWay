import Debug "mo:base/Debug";
import Text "mo:base/Text";
import List "mo:base/List";
import Hash "mo:base/Hash";
import Array "mo:base/Array";
import HashMap "mo:base/HashMap";

actor {

  // var searchMap = HashMap.HashMap<Text, UserInfo>(0, Text.equal, Text.hash);

  // type UserInfo = {
  //   origin : Text;
  //   destination : Text;
  //   departDate : Text;
  //   returnDate : Text;
  //   noOfPassengers : Nat;
  //   travelCategory : Text;
  // };

  // public func insertSearchData(userName : Text, info : UserInfo) : async Text {
  //   let searchInfo : UserInfo = {
  //   origin : Text = info.origin;
  //   destination : Text = info.destination;
  //   departDate : Text = info.departDate;
  //   returnDate : Text = info.returnDate;
  //   noOfPassengers : Nat = info.noOfPassengers;
  //   travelCategory : Text = info.travelCategory;
  //   };
  //   searchMap.put(userName, searchInfo);
  //   return "User data inserted successfully";
  // };

let flightArray : [Text] = [
  "Indigo A6320, Dpt time : 10:00",
  "Indigo A6321, Dpt time :  11:00",
  "Air India A6322, Dpt time :  12:00",
  "Air India A6323, Dpt time :  13:00",
  "Vistara A6324, Dpt time :  14:00",
  "Vistara A6325, Dpt time :  15:00",
];

public query func getFlights() : async [Text] {
  return flightArray;
};

}
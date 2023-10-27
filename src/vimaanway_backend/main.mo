import Debug "mo:base/Debug";
import Text "mo:base/Text";
import List "mo:base/List";
import Hash "mo:base/Hash";
import Array "mo:base/Array";
import HashMap "mo:base/HashMap";

actor {

  var origin : Text = "";
  var destination : Text = "";
  var departDate : Text = "";
  var returnDate : Text = "";
  var tripType : Text = "";
  var travellers : Int = 1;

  public func setOrigin(value : Text) : async Text {
    origin := value;
    return "Origin set successfully";
  };

  public func setDestination(value : Text) : async Text {
    destination := value;
    return "Destination set successfully";
  };

  public func setDepartDate(value : Text) : async Text {
    departDate := value;
    return "Departure date set successfully";
  };

  public func setReturnDate(value : Text) : async Text {
    returnDate := value;
    return "Return date set successfully";
  };

  public func setTripType(value : Text) : async Text {
    tripType := value;
    return "Trip type set successfully";
  };

  public func setTravellers(value : Int) : async Text {
    travellers := value;
    return "Fair type set successfully";
  };

  public query func printOrigin() : async Text {
    return origin;
  };

  public query func printDestination() : async Text {
    return destination;
  };

  public query func printDepartDate() : async Text {
    return departDate;
  };

  public query func printReturnDate() : async Text {
    return returnDate;
  };

  public query func printTripType() : async Text {
    return tripType;
  };

  public query func printTravellers() : async Int {
    return travellers;
  };

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

};

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

  // Flight arrays to store flight details for different cities

  let flightArray : [Text] = [
    "IndiGo (6E-1248) | 08:00 - 10:30 | --> ₹3,500",
    "Air India (AI626) | 09:30 - 11:45 | --> ₹4,200",
    "SpiceJet (SG2341) | 13:15 - 15:30 | --> ₹3,800",
    "AirAsia India (I59613) | 07:45 - 09:55 | --> ₹3,200",
    "Vistara (UK929) | 10:30 - 12:45 | --> ₹4,800",
    "Alliance Air (AA5412) | 11:00 - 13:15 | --> ₹4,000",
    "Saudia (SU985) | 12:30 - 15:00 | --> ₹5,500",
    "Qatar Airways (QA-1965) | 08:15 - 10:45 | --> ₹6,200",
    "Air Arabia (AI582) | 10:15 - 12:30 | --> ₹4,600",
    "Etihad Airways (EA5697) | 11:30 - 13:45 | --> ₹5,800",
    "Lufthansa (L2514) | 09:45 - 12:00 | --> ₹7,000",
    "Emirates (ER1110) | 13:00 - 15:30 | --> ₹6,800",
  ];

  let mumbaiFlights : [Text] = [
    "Air India (AI626) | 09:30 - 11:45 | --> ₹4,200",
    "SpiceJet (SG2341) | 13:15 - 15:30 | --> ₹3,800",
    "AirAsia India (I59613) | 07:45 - 09:55 | --> ₹3,200",
    "Vistara (UK929) | 10:30 - 12:45 | --> ₹4,800",
  ];

  let delhiFlights : [Text] = [
    "Saudia (SU985) | 12:30 - 15:00 | --> ₹5,500",
    "Qatar Airways (QA-1965) | 08:15 - 10:45 | --> ₹6,200",
    "Air Arabia (AI582) | 10:15 - 12:30 | --> ₹4,600",
    "Etihad Airways (EA5697) | 11:30 - 13:45 | --> ₹5,800",
    "Lufthansa (L2514) | 09:45 - 12:00 | --> ₹7,000",
  ];

  let odishaFlights : [Text] = [
    "IndiGo (6E-1248) | 08:00 - 10:30 | --> ₹3,500",
    "Air India (AI626) | 09:30 - 11:45 | --> ₹4,200",
    "SpiceJet (SG2341) | 13:15 - 15:30 | --> ₹3,800",
  ];

  let kolkataFlights : [Text] = [
    "IndiGo (6E-1248) | 08:00 - 10:30 | --> ₹3,500",
    "Air India (AI626) | 09:30 - 11:45 | --> ₹4,200",
    "Etihad Airways (EA5697) | 11:30 - 13:45 | --> ₹5,800",
    "Lufthansa (L2514) | 09:45 - 12:00 | --> ₹7,000",
    "Emirates (ER1110) | 13:00 - 15:30 | --> ₹6,800",
  ];

  let chennaiFlights : [Text] = [
    "Vistara (UK929) | 10:30 - 12:45 | --> ₹4,800",
    "Alliance Air (AA5412) | 11:00 - 13:15 | --> ₹4,000",
    "Saudia (SU985) | 12:30 - 15:00 | --> ₹5,500",
    "IndiGo (6E-1248) | 08:00 - 10:30 | --> ₹3,500",
    "Air India (AI626) | 09:30 - 11:45 | --> ₹4,200",
  ];

  let bangaloreFlights : [Text] = [
    "Alliance Air (AA5412) | 11:00 - 13:15 | --> ₹4,000",
    "Saudia (SU985) | 12:30 - 15:00 | --> ₹5,500",
    "Qatar Airways (QA-1965) | 08:15 - 10:45 | --> ₹6,200",
    "Air Arabia (AI582) | 10:15 - 12:30 | --> ₹4,600",
    "Etihad Airways (EA5697) | 11:30 - 13:45 | --> ₹5,800",
    "Lufthansa (L2514) | 09:45 - 12:00 | --> ₹7,000",
  ];

  public query func getFlights() : async [Text] {
    switch (origin) {
      case ("Mumbai") { return mumbaiFlights };
      case ("Delhi") { return delhiFlights };
      case ("Odisha") { return odishaFlights };
      case ("Kolkata") { return kolkataFlights };
      case ("Chennai") { return chennaiFlights };
      case ("Bangalore") { return bangaloreFlights };
      case (_) { return flightArray };
    };
  };

};

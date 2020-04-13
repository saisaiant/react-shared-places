import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://webheads-g9n1f8q3p5.netdna-ssl.com/wp-content/uploads/2018/04/newyor-api.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7480205,
      log: -73.9856736,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building 2",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://webheads-g9n1f8q3p5.netdna-ssl.com/wp-content/uploads/2018/04/newyor-api.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7480205,
      log: -73.9856736,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};
export default UserPlaces;

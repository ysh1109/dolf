import React, { useRef } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

const Marker = (options) => {
  const [marker, setMarker] = React.useState();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

const Map = ({ onClick, onIdle, children, style = { height: "100vh", width: "100vh" }, ...options } = {}) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  React.useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) => window.google.maps.event.clearListeners(map, eventName));

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);
  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};
const render = (status) => {
  return <h1>{status}</h1>;
};
const RequestForm = () => {
  const [clicks, setClicks] = React.useState([]);
  const [zoom, setZoom] = React.useState(3); // initial zoom
  const [center, setCenter] = React.useState({
    lat: 200,
    lng: 200,
  });

  const onClick = (e) => {
    // avoid directly mutating state
    setClicks([...clicks, e?.latLng]);
  };

  const onIdle = (m) => {
    console.log("onIdle");
    setZoom(m?.getZoom());
    setCenter(m?.getCenter()?.toJSON());
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Wrapper apiKey={"AIzaSyD_PMRfmKawDZZFPkNQ1_R5eI0mMs4V8x0"} render={render}>
        <Map center={center} onClick={onClick} onIdle={onIdle} zoom={zoom} style={{ flexGrow: "1", height: "100%" }}>
          {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
        </Map>
      </Wrapper>
      {/* Basic form for controlling center and zoom of map. */}
      {/* {form} */}
    </div>
  );
};

export default RequestForm;

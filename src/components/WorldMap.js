import React from 'react';

import L from 'leaflet';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const WorldMap = () => {
  return (
    <div className="container d-flex justify-content-end my-3 mx-5" style={{ width: '100%', margin: '0 auto' }}>
      <div className="flex flex-col gap-1 text-center">
      <a title="free world map tracker" href="https://smallcounter.com/vmap/1729584507/">
<img title="free world map counter" src="https://smallcounter.com/map/view.php?type=180&id=1729584507" alt="world map hits counter" /></a><br></br>

	  <a href="https://smallcounter.com" className="text-sm text-blue-400 text-center" style={{textDecoration: "none"}}>
          Page Visitors
        </a>
      </div>
    </div>
  );
};

export default WorldMap;


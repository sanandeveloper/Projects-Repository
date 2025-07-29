import React, { useRef, useState } from "react";
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from "@react-google-maps/api";

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA_L_IawGXTPEBmrGQ1gbC-96mLLcCiMJA",
    libraries:['places']
  });
  const center = {
    lat: 34.124069,
    lng: 72.461319,
  };
  const orignref=useRef()
  const distaneRef=useRef()

  const MapTypes = [
    {
      mapid: "hybrid",
      label: "Hybrid",
      icon: "🌍"
    },
    {
      mapid: 'terrain',
      label: 'Terrain',
      icon: "⛰️"
    }, 
    {
      mapid: 'roadmap',
      label: 'Roadmap',
      icon: "🛣️"
    }, 
    {
      mapid: 'satellite',
      label: 'Satellite',
      icon: "🛰️"
    }
  ];

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [mapType, setMapType] = useState("hybrid");

  if (!isLoaded) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <div style={{
          padding: '20px 40px',
          background: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>Loading Map</h1>
          <div style={{
            width: '100%',
            height: '8px',
            background: '#ecf0f1',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '60%',
              height: '100%',
              background: 'linear-gradient(90deg, #3498db, #9b59b6)',
              animation: 'loading 1.5s infinite ease-in-out'
            }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      width: "100", 
      height: "100vh",
      position: 'relative',
      overflow: 'hidden'
    }}>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerStyle={{
          width: "100%",
          height: "100%",
          marginLeft: "90px",
        }}
        onLoad={(map) => setMap(map)}
        mapTypeId={mapType}
        options={{
          mapTypeId:[
            'satellite',
            'terrian',
          ]
        }}
      >
        <Marker position={center} />
      </GoogleMap>

      <div style={{
        position: 'absolute',
        top: '20px',
        left: '',
        
        backgroundColor: 'rgba(255,255,255,0.9)',
        
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        {MapTypes.map((item, index) => (
          <button 
            key={index} 
            onClick={() => setMapType(item.mapid)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '4px 4px',
              backgroundColor: mapType === item.mapid ? '#e3f2fd' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              color: mapType === item.mapid ? '#1976d2' : '#424242',
              fontWeight: mapType === item.mapid ? '600' : '400',
              transition: 'all 0.2s ease',
              fontSize: '11px',
              textAlign: 'left'
            }}
          >
            <span style={{ fontSize: '18px' }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: '10px 20px',
        borderRadius: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        fontSize: '14px',
        color: '#424242'
      }}>
      CurrentView : {mapType}
      </div>
      <div>
        <button style={{
          position:'absolute',
          top:'50%',
          left:'',
          fontSize:'11px',
          borderRadius:'12px',
          padding:'6px'
        
        }} onClick={()=>map.panTo(center

        )}>Return center</button>
      </div>

      <div style={{backgroundColor:'red', position:'absolute' ,top:'10%', left:'30%'}}>
        <div>
       
         </div>
      </div>
    </div>
  );
}

export default App;
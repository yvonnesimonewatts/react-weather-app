import React from 'react';
import './Weather.css';

export default function WeatherHeadline(props) {
  if (props.data.id >= 200 && props.data.id <= 232) {
    return (
    <div className="ThunderstormHeadline">
      So, it’s stormy today!
    </div>
    );
  } else if (props.data.id >= 300 && props.data.id <= 301) {
    return (
      <div className="LightDrizzleHeadline">
        Drizzle fo shizzle my nizzle
      </div>
    );
  } else if (props.data.id === 302) {
    return (
      <div className="HeavyDrizzleHeadline">
        Don't forget your umbrella, ella, ella...
      </div>
    );
  } else if (props.data.id === 310) {
    return (
      <div className="LightDrizzleHeadline">
        Drizzle fo shizzle my nizzle
      </div>
    );
  } else if (props.data.id >= 311 && props.data.id <= 321) {
    return (
      <div className="HeavyDrizzleHeadline">
        Under my umbrella, ella, ella...
      </div>
    );
  } else if (props.data.id >= 500 && props.data.id <= 501) {
     return (
    <div className="LightRainHeadline">
      No rain no rainbow!
    </div>
    );
  } else if (props.data.id >= 502 && props.data.id <= 511) {
    return (
    <div className="HeavyRainHeadline">
      You're getting absolutely drenched today... <br /> umbrella, wellies, raincoat, heck, you might even need a boat.
    </div>
    ); 
} else if (props.data.id >= 520 && props.data.id <= 521) {
    return (
    <div className="RainHeadline">
      If it rains on your parade, dance in it.
    </div>
    );
  } else if (props.data.id >= 522 && props.data.id <= 531) {
    return (
    <div className="HeavyRainHeadline">
      Rain, rain go away! 
    </div>
    );
  } else if (props.data.id >= 600 && props.data.id <= 601) {
     return (
    <div className="LightSnowHeadline">
      So, it's snowy today!
    </div>
    );
  } else if (props.data.id === 602) {
    return (
    <div className="HeavySnowHeadline">
      When it snows, you have two choices: <br /> shovel or make snow angles.
    </div>
    );
  } else if (props.data.id >= 611 && props.data.id <= 622) {
     return (
    <div className="LightSnowHeadline">
      So, it's snowy today!
    </div>
    );
  } else if (props.data.id === 701) {
    return (
    <div className="MistHeadline">
      I tried to catch some fog, but I mist.
    </div>
    );
  } else if (props.data.id === 711) {
    return (
    <div className="SmokeHeadline">
      Warning: poor air quality due to pollution or fires. 
    </div>
    );
  } else if (props.data.id === 721) {
    return (
    <div className="HazeHeadline">
      So, it's hazy today!
    </div>
    );
} else if (props.data.id === 731) {
    return (
    <div className="SandDustHeadline">
      It's like going for a walk in the Sahara today.
    </div>
    );
  } else if (props.data.id === 741) {
    return (
    <div className="FogHeadline">
      The fog always lifts...
    </div>
    );
  } else if (props.data.id === 751) {
    return (
    <div className="SandHeadline">
      It's like going for a walk in the Sahara today.
    </div>
    );
  } else if (props.data.id === 761) {
    return (
    <div className="DustHeadline">
      It's like going for a walk out in the Sahara today.
    </div>
    );
  } else if (props.data.id === 762) {
    return (
    <div className="AshHeadline">
       Warning: poor air quality due to fires.
    </div>
    );
  } else if (props.data.id >= 771 && props.data.id <= 781) {
    return (
    <div className="TornadoHeadline">
      Warning: it's rather blustery!
    </div>
    );
    } else if (props.data.id === 800) {
    return (
    <div className="ClearHeadline">
      Sun is shining, Weather is sweet <br /> Make you want to move your dancing feet...
    </div>
    );
  } else if (props.data.id >= 801 && props.data.id <= 803) {
    return (
    <div className="ScatteredCloudHeadline">
      Cloudy skies make beautiful sunsets.
    </div>
    );
  } else if (props.data.id === 804) {
    return (
    <div className="OvercastCloudHeadline">
      Clouds in the sky - what shapes do you see?
    </div>
    );
  } else {
    return (
    <div className="Else">
      No matter the weather, always bring your own sunshine!
    </div>
    );
  }
}
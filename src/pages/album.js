import Image from 'next/image';
import React from 'react';

const Album = () => {
    return (
      <div>
        <img
          src="https://d2ms8rpfqc4h24.cloudfront.net/Developer_Community_On_Next_JS_Vs_React_dcd121883e.jpg"
          alt=""
          srcset=""
          width={"600"}
          height={"300"}
        />
        <Image
          src={
            "https://d2ms8rpfqc4h24.cloudfront.net/Developer_Community_On_Next_JS_Vs_React_dcd121883e.jpg"
          }
          width={600}
          height={300}
        />
      </div>
    );
};

export default Album;
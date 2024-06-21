import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Meeting = () => {
  const roomID = "Room";

  const myMeeting = async (element) => {
    // Generate Kit Token
    const appID = 362239873;
    const serverSecret = "3bca63f97faf78d0aef796b7dfb250f4";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Marko");

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // Start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return (
    <div
      ref={myMeeting}
      className="w-full h-screen md:w-[100vw] md:h-[100vh]" // Adjusting width and height for responsiveness
    ></div>
  );
};

export default Meeting;

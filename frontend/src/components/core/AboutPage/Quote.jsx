import React from 'react'
import HighlightText from '../HomePage/HighlightText';

const Quote = () => {
  return (
    <div>
      <p className="relative text-white px-4  gap-1  text-3xl">
        <span>"</span>
        We are passionate about revolutionizing the way we learn. Our innovative
        platform
        <HighlightText
          text={"combines technology"}
          textColor={"text-gradient-1"}
        />
        , <HighlightText text={"expertise"} textColor={"text-gradient-1"} />
        , and community to create an
        <HighlightText
          text={"unparalleled educational experience."}
          textColor={"text-gradient-3"}
        />
        <span>"</span>
      </p>
    </div>
  );
}

export default Quote

import React from 'react';

const Classify = () => {
  const streamlitUrl = "https://dental-ai.onrender.com"; // Replace with your Streamlit app URL

  return (
    <div className="text-zinc-900 mt-10">
      <h2>Streamlit Application</h2>
      <iframe
        src={streamlitUrl}
        width="100%"
        height="800px"
        style={{ border: 'none' }}
        title="Streamlit App"
      />
    </div>
  );
}

export default Classify;

import { useState, useEffect, useRef, useLayoutEffect, useMemo } from "react";

export default function ValentinesInvite() {
  // ------------------- LOGIN -------------------
  const [authenticated, setAuthenticated] = useState(false);
  const [name, setName] = useState("");
  const displayName = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
  function handleLogin(e) {
    e.preventDefault();
    console.log("handleLogin called with name: ", name);
    

    if (!name.trim()) return;
    setAuthenticated(true);
  }

  function useTypewriter(text, speed = 80) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setIndex((i) => i + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return text.slice(0, index);
}



  // ------------------- VALENTINE -------------------
  const messages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again 🥺",
    "Last chance!",
    "You’re breaking my heart 💔",
    "OKAY FINE 😭",
  ];

  const yesRef = useRef(null);
  const [messageIndex, setMessageIndex] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);
  const [yesSize, setYesSize] = useState({ width: 0, height: 0 });
  const [accepted, setAccepted] = useState(false);

  const fullText = useMemo(
    () =>
      displayName
        ? `${displayName}, will you be my Valentine? 💘`
        : "Will you be my Valentine? 💘",
    [displayName]
  );

  const typedText = useTypewriter(fullText, 70);


  // measure Yes button after login
  useLayoutEffect(() => {
    if (authenticated && yesRef.current) {
      const rect = yesRef.current.getBoundingClientRect();
      setYesSize({ width: rect.width, height: rect.height });
    }
  }, [authenticated]);

  function handleNoClick() {
    setMessageIndex((prev) => (prev + 1) % messages.length);
    setYesScale((prev) => Math.min(prev * 1.35, 20)); // grows faster to fullscreen
    setNoScale((prev) => Math.max(prev * 0.75, 0.15));
  }

  function handleYesClick() {
    setAccepted(true);
  }

  const yesScaledWidth = yesSize.width * yesScale;
  const yesScaledHeight = yesSize.height * yesScale;
  const yesTakesOver =
    yesScaledWidth >= window.innerWidth * 0.9 ||
    yesScaledHeight >= window.innerHeight * 0.9;

  // ------------------- RENDER -------------------
  if (!authenticated) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-pink-50 p-4 text-center font-sans relative overflow-hidden">
        <h1 className="text-4xl font-bold text-pink-600 drop-shadow-lg mb-4 animate-bounce">
          💗 Welcome 💗
        </h1>
        <p className="text-lg text-pink-500">Enter your name to continue:</p>
        <form onSubmit={handleLogin} className="flex flex-col gap-3 mt-4 w-full max-w-xs">
          <input
            type="text"
            placeholder="Your name…"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-xl border border-pink-300 text-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button className="p-3 bg-pink-500 text-white rounded-full font-bold hover:scale-110 transform transition-all duration-200">
            Enter 💌
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-pink-50 p-4 text-center font-sans relative overflow-hidden">
      {/* Floating hearts */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`absolute bg-pink-400 rounded-full w-4 h-4 animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 3}s`,
            bottom: `${-10 - Math.random() * 20}px`,
          }}
        ></div>
      ))}

      {!accepted ? (
        <>
          <h1
          className="text-3xl sm:text-4xl text-pink-600 drop-shadow-lg mb-6 min-h-[4rem]"
          style={{ fontFamily: "'Silkscreen', cursive" }}
        >
          {typedText}
          <span className="animate-pulse">▍</span>
        </h1>




          <div className="flex flex-col items-center gap-6">
            {/* Buttons Row */}
            <div className="relative flex justify-center items-center">
              <button
                ref={yesRef}
                className={`px-6 py-4 bg-pink-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105`}
                style={{
                  transform: yesTakesOver ? "scale(50)" : `scale(${yesScale})`,
                  zIndex: 20,
                }}
                onClick={handleYesClick}
              >
                Yes 💖
              </button>

              {!yesTakesOver && (
                <button
                  className={`absolute px-6 py-4 bg-white text-pink-600 font-bold rounded-full shadow-md transform transition-all duration-300 animate-shake`}
                  style={{
                    transform: `scale(${noScale})`,
                    left: `calc(50% + ${yesSize.width * yesScale / 2 + 40}px)`,
                    top: "50%",
                    translate: "-50% -50%",
                    zIndex: 10,
                  }}
                  onClick={handleNoClick}
                >
                  {messages[messageIndex]}
                </button>
              )}
            </div>

            {/* GIF below buttons */}
            {!yesTakesOver && (
              <div className="mt-4">
                <img
                  src="https://media.giphy.com/media/10a8AOSeP6Rqfu/giphy.gif"
                  alt="Cute Corgi GIF"
                  width="200"
                  height="200"
                  className="mx-auto rounded-xl shadow-lg"
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <h1
          className="text-4xl font-bold text-pink-600 drop-shadow-lg mb-4 animate-bounce"
          style={{ fontFamily: "'Silkscreen', cursive" }}
        >
          YAY!!! 🥰
        </h1>
        <p
          className="text-lg text-pink-500 mb-4"
          style={{ fontFamily: "'Silkscreen', cursive" }}
        >
          I knew you’d say yes 💕
        </p>

          <iframe
            src="https://giphy.com/embed/9PaZX8Np5vwJGrg4L0"
            width="480"
            height="480"
            frameBorder="0"
            className="giphy-embed rounded-xl shadow-lg"
            allowFullScreen
            title="Giphy Embed"
          ></iframe>
        </div>
      )}

      {/* Tailwind animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); opacity: 0.5; }
            50% { transform: translateY(-200px) rotate(10deg); opacity: 1; }
            100% { transform: translateY(-400px) rotate(-10deg); opacity: 0; }
          }
          .animate-float {
            animation-name: float;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }
          @keyframes shake {
            0%, 100% { transform: translate(0,0); }
            20%, 60% { transform: translate(-4px,0); }
            40%, 80% { transform: translate(4px,0); }
          }
          .animate-shake {
            animation-name: shake;
            animation-duration: 0.3s;
          }
        `}
      </style>
    </div>
  );
}

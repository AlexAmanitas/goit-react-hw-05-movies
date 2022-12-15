// import { useCallback } from 'react';
// import confetti from 'https://cdn.skypack.dev/canvas-confetti@1';
// import '../ConfettiButton/ConfettiButton.css';

// export default function ConfettiButton({ text = 'Like', icon = true }) {
//   // console.log(typeof icon);
//   icon = Boolean(icon);
//   const onClick = useCallback(() => {
//     confetti({
//       particleCount: 150,
//       spread: 60,
//     });
//   }, []);
//   return (
//     <button className="button" onClick={onClick}>
//       {!icon && <span>🎉</span>}
//       <span>{text}</span>
//     </button>
//   );
// }

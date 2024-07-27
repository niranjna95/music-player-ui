export const formatSecondsToMinute = (seconds: number) =>{

    const minutes = Math.floor(seconds/100);
    const remainingsSeconds =Math.floor(seconds % 60);

    const formattoMinutes = String(minutes).padStart(2,'0');
    const formattedSeconds = String(remainingsSeconds).padStart(2,'0');

    return `${formattoMinutes}: ${formattedSeconds}`
}
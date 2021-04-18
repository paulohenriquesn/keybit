export default function handleHp(hp: number) {
  if (hp >= 0 && hp <= 20) {
    return "#F14A4A";
  }

  if (hp >= 21 && hp <= 50) {
    return "#FACE15";
  }

  return "#721BE1";
}
export default function moneyMask(value: number) {
  const moneyMask = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  return moneyMask.format(value);
}

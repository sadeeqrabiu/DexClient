export const parseUnits = (value: string, decimals: number): string => {
    if (!value) return '0';
    const parts = value.split('.');
    let whole = parts[0];
    let fraction = parts[1] || '';
    
    while (fraction.length < decimals) {
      fraction += '0';
    }
    fraction = fraction.slice(0, decimals);
    
    return whole + fraction;
  };
  
  export const formatUnits = (value: string, decimals: number): string => {
    if (!value) return '0';
    
    while (value.length < decimals) {
      value = '0' + value;
    }
    
    const whole = value.slice(0, -decimals) || '0';
    const fraction = value.slice(-decimals);
    
    return `${whole}.${fraction}`.replace(/\.?0+$/, '');
  };
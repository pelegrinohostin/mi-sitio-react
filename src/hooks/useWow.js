import { useEffect } from 'react';

export const useWow = () => {
  useEffect(() => {
    // Importamos dinámicamente para evitar errores de módulo estático
    import('wowjs').then((WOWModule) => {
      const WOW = WOWModule.WOW || WOWModule.default;
      if (WOW) {
        new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true
        }).init();
      }
    });
  }, []);
};

# Soporte Digital Tesis — Abejas Meliponini

## Sobre el proyecto
Página web educativa sobre Abejas Meliponini como soporte digital
de tesis de diseño industrial. Público objetivo: ciudadanos urbanos
que no conocen las abejas meliponinas.

## Referencia principal de diseño
https://www.melipona.eco

Analizar y tomar inspiración de:
- Fotos de fondo grandes y cinematográficas (hero con imagen full screen)
- Texto narrativo y poético — no informativo frío
- Tipografía serif elegante mezclada con sans-serif
- Secciones con tabs para organizar contenido
- Transiciones suaves entre secciones
- Sensación orgánica, cálida, natural

## Paleta de colores
- Verde oscuro #3B6D11 y verde claro #639922 → naturaleza, vida
- Amarillo/dorado #EF9F27 → miel, identidad latina
- Rojo #C0392B → datos importantes, urgencia
- Naranja #E67E22 → calidez, cultivos (contraste)
- Azul #2980B9 → agua, cielo (contraste secundario)
- Fondos: crema cálido o verde muy oscuro casi negro

## Estilo visual
- Colorido y orgánico con toques latinos
- Fotos reales de abejas meliponinas ocupando pantalla completa
- Tipografía bold y con personalidad para títulos
- Sensación de estar en la naturaleza colombiana/latinoamericana
- NO genérico, NO corporativo, NO frío

## Estructura de la página (NO modificar, solo estética)
La página tiene DOS modos de navegación que deben mantenerse:

### Modo Secuencial
El usuario desbloquea el contenido pantalla por pantalla en orden:
1. Splash — hero con foto de abeja, botón "Click para Comenzar"
2. Bienvenida — mensaje de presentación de las abejas
3. Advertencia — "No somos peligrosas, solo hacemos nuestro trabajo"
4. Selector de modo — elegir entre secuencial o libre
5. Impacto — datos de polinización y cultivos
6. Cultivos beneficiados — fresas, café, aguacate, banano, etc.
7. Descripción — cómo identificar la abeja meliponina
8. Cuidados — cómo convivir con ellas

### Modo Libre
Mismo contenido pero accesible desde un menú con tabs:
Impacto | Cultivos | Descripción | Cuidados

## Lo que SÍ se puede cambiar (estética)
- Colores, fuentes, tamaños tipográficos
- Fondos, texturas, overlays sobre fotos
- Animaciones y transiciones entre pantallas
- Estilo de botones, cards y badges
- Espaciado y composición visual

## Lo que NO se puede cambiar (estructura)
- El flujo Splash → Bienvenida → Advertencia → Selector
- La existencia de los dos modos (secuencial y libre)
- El contenido textual de cada sección
- La navegación entre pantallas del modo secuencial

## Reglas de trabajo
- Trabajar siempre paso a paso, sección por sección
- Proponer los cambios antes de aplicarlos
- Explicar qué hace cada parte del código modificado
- Mantener compatibilidad con GitHub Pages
- No hacer cambios masivos en una sola vez

## index_v2.html — Rediseño Mobile-First

### Objetivo
Nueva versión de la página con estética mobile-first tipo app nativa.
El archivo original (index.html) se conserva intacto como respaldo.

### Referencias visuales
- App "florest": hero fotográfico, cards flotantes, bordes redondeados
- E.reader UI: pantallas limpias y bien definidas
- Bottom nav con bump curvo: ítem activo sube con curva

### Cambios de UX permitidos en v2
- Navegación por bottom nav (abajo) en lugar de barra superior
- Swipe horizontal entre pantallas
- Sin scroll — cada pantalla cabe en el viewport del celular
- Transiciones tipo slide suave entre pantallas

### Estética v2
- Misma paleta de colores del proyecto original
- Cards flotantes que no tocan los bordes de pantalla
- Bordes redondeados en todos los elementos (cards, botones, nav)
- Hero fotográfico con overlay oscuro y texto encima
- Tipografía bold con personalidad para títulos

### Estructura (se mantiene igual que index.html)
- El flujo y las pantallas son los mismos
- Solo cambia la estética y la navegación
# Soporte Digital Tesis — Abejas Meliponini

## Sobre el proyecto
Página web educativa sobre Abejas Meliponini como soporte digital
de tesis de diseño industrial. Público objetivo: ciudadanos urbanos
que no conocen las abejas meliponinas.

## Concepto visual central: Tarot Latinoamericano
La página se siente como un mazo de cartas sagradas sobre las abejas.
Cada sección es una "carta" que se revela. Las abejas son personajes
con identidad propia — no datos fríos, sino seres con historia.

Palabras clave del moodboard: Latinoamericano · Llamativo · Acogedor · Armonioso

## Referencia de diseño
Tarjetas diseñadas en Illustrator del proyecto (tarot de abejas):
- Fondo de mosaico dorado con textura
- Numeración romana (III, VIII, XIX)
- Flores tropicales desbordándose por los bordes de la carta
- Tipografía serif con personalidad para nombres de especies
- Cada abeja centrada en una silueta orgánica crema/hueso
- Elementos flotantes: sol dorado, nubes, estrellas carambolo

## Paleta de colores
- Dorado mosaico #C9A84C y #E8C96A → fondo texturizado de carta
- Naranja carta #E8834A → carta central, acento principal
- Verde oliva #6B7A2E y #8B9A3A → naturaleza, hojas
- Rojo borgoña #8B1A2E → flores tropicales, acentos dramáticos
- Crema/hueso #F5EDD4 → siluetas, texto sobre fondos oscuros
- Café oscuro #3D2410 → textos principales, bordes de carta

## Tipografía
- Títulos y nombres de especies: serif elegante con personalidad
  (opciones: Playfair Display, IM Fell English, Cormorant Garamond)
- Numeración romana: misma fuente serif, tamaño grande
- Texto de cuerpo: sans-serif legible y cálido (Lato, Nunito)
- Frases/citas: itálica serif, estilo manuscrito botánico

## Estética de carta
- Cada pantalla/sección se presenta como una carta de tarot
- Las cartas tienen borde dorado con esquinas redondeadas
- Textura de mosaico en el fondo (CSS pattern o imagen)
- Flores y elementos PNG se desbordan por encima del borde de la carta
- Animación de entrada: carta voltea desde el reverso (flip 3D)
  o desliza desde abajo como si saliera de un mazo
- Elementos flotantes animados: sol que gira lentamente, flores que caen

## Assets disponibles en el proyecto
Todos los recursos gráficos están en la carpeta `/recursos graficos/`.
Antes de escribir cualquier código, listar los archivos de esa carpeta
para saber exactamente qué hay disponible y usar esos nombres reales.
- Imágenes PNG de flores tropicales (orquídeas, hibiscos, etc.)
- Imágenes PNG de las tres abejas (Tetragonisca, Scaptotrigona, Melipona)
- Elementos decorativos: sol dorado, estrellas carambolo, nubes, esferas
Usarlos como elementos que se desbordan en las cartas, NO como fondos planos.

## Animaciones de carta
- Entrada de pantalla: flip de carta (rotateY de 90° a 0°) o slide desde abajo
- Transición entre pantallas: la carta anterior sale volando hacia arriba,
  la nueva entra desde abajo del mazo
- Hover en botones: leve elevación con sombra dorada
- Modo libre: las tabs se comportan como seleccionar una carta del mazo

## Estructura de la página (NO modificar, solo estética)
La página tiene DOS modos de navegación que deben mantenerse:

### Modo Secuencial
El usuario desbloquea el contenido pantalla por pantalla:
1. Splash — hero oscuro, carta central con abeja, botón "Revelar"
2. Bienvenida — carta de presentación de las abejas
3. Advertencia — "No somos peligrosas, solo hacemos nuestro trabajo"
4. Selector de modo — elegir entre secuencial o libre
5. Impacto — datos de polinización y cultivos
6. Cultivos beneficiados — fresas, café, aguacate, banano, etc.
7. Descripción — cómo identificar la abeja meliponina
8. Cuidados — cómo convivir con ellas

### Modo Libre
Mismo contenido accesible desde tabs:
Impacto | Cultivos | Descripción | Cuidados
Cada tab activa muestra su carta con animación de flip.

## Lo que SÍ se puede cambiar
- Colores, fuentes, tamaños tipográficos
- Fondos, texturas, overlays
- Animaciones y transiciones entre pantallas
- Estilo de botones, cards y badges
- Espaciado y composición visual
- Estructura del HTML si es necesario para las animaciones

## Lo que NO se puede cambiar
- El flujo Splash → Bienvenida → Advertencia → Selector
- La existencia de los dos modos (secuencial y libre)
- El contenido textual de cada sección

## Reglas de trabajo
- Trabajar siempre paso a paso, sección por sección
- Proponer los cambios antes de aplicarlos
- Explicar qué hace cada parte del código modificado
- Mantener compatibilidad con GitHub Pages
- No hacer cambios masivos en una sola vez
- Un solo archivo HTML (no más versiones separadas)
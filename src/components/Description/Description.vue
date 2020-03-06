<template>
  <div>
    <p class="text-justify subheading font-weight-regular">
      El análisis de sentimiento, también conocido como minería de opinión
      <strong>(opinion mining)</strong>, es el proceso de determinar el tono emocional
      que hay detrás de una serie de palabras, y se utiliza para intentar entender las actitudes,
      opiniones y emociones expresadas en una mención.
      <br />
      <br />
      Este es extremadamente útil en la monitorización de las redes sociales
      ya que permite hacernos una idea de la opinión pública general sobre ciertos temas.
      Herramientas de monitorización de las redes sociales como
      <a href="https://www.brandwatch.com/es/brandwatch-analytics/">Brandwatch Analytics</a>
      hacen que este proceso sea mucho más rápido y fácil que nunca gracias a la capacidad de
      monitorizar en tiempo real.
      <br />
      <br />
      Sin embargo el análisis de sentimiento <strong>no</strong> es una ciencia perfecta.
      El lenguaje humano es complejo, enseñar a una máquina a analizar los diferentes matices
      gramaticales, variaciones culturales, jergas y faltas de ortografía de las menciones
      online es un proceso difícil. Y enseñar a una máquina a entender cómo el contexto puede
      afectar al tono, es aún más difícil.
    </p>

    <h3 class="text-justify font-weight-bold">Limitaciones</h3>
    <p class="text-justify subheading font-weight-regular">
      Existen diversas limitaciones al igual que con otros modelos y podemos reflejarlo con
      varios ejemplos:
      <br />
      Frases como: “Mi vuelo se retrasa. ¡Genial!”
      La mayoría de los humanos podrían interpretar rápidamente que la persona está
      siendo sarcástica.
      Pero una máquina que procesara esta frase vería la palabra “genial” y la
      categorizaría como positiva.
      <br />
      Identificar el contexto de estas dos frases y clasificarlas de forma correcta es todo
      un reto para cualquier algoritmo de clasificación.
      <br />
      1-) “Los burritos me vuelven loco” <br />
      2-) “Hay que estar loco para comerse uno de esos burritos” <br />
      <br />
      Los ejemplos mencionados muestran cómo el análisis de sentimiento tiene sus limitaciones,
      y no puede ser usado como un marcador con un 100% de fiabilidad.
      <br />
      Como cualquier otro proceso automático, es propenso a errores, y a menudo necesita del ojo
      humano para vigilarlo.
    </p>

    <h3 class="text-justify font-weight-bold">Proyecto</h3>
    <p class="text-justify subheading font-weight-regular">
      Para realizar este proyecto se utilizaran dos modelos para clasificar los textos ingresados
      como positivos y/o negativos:
      <br />
      1-) AFINN-165 (entrenado) <br />
      2-) Naive Bayes classifier <br />
      Antes de entrar en detalle con cada modelo, primero abordaremos el detalle de que el
      modelo AFINN-165 ya está entrenado por defecto, sin embargo el modelo Naive Bayes classifier
      debe ser entrenado. Y para realizar este proceso utilizaremos el dataset (corpus) del
      taller de análisis de sentimientos de la
      <a href="http://www.sepln.org/sepln">Sociedad Española de Procesamiento del Lenguaje Natural</a>.
      <br />
      Este dataset consiste en un conjunto de tweets extraídos de las cuentas de diversas
      personalidades de españa. Su objetivo es fomentar el diseño y aplicación de técnicas y
      algoritmos del estado de la cuestión para la implementación de sistemas de clasificación
      automatizados capaces de analizar el sentir ciudadano.
      <br />
      La versión simplificada de este dataset posee 15,000 observaciones, 1 atributo que posee
      el tweet y un label (etiqueta) que indica si el tweet fue clasificado como
      positivo o negativo. Cabe destacar que este dataset fue clasificado manualmente de manera
      subjetiva indicando el sentimiento contenido en cada mensaje.
    </p>

    <h3 class="text-justify font-weight-bold">Procesamiento de Datos</h3>
    <p class="text-justify subheading font-weight-regular">
      Por la naturaleza del dataset (tweets escritos por usuarios que al tener 140 caracteres
      por mensaje recurren a abreviar las palabras y utilizar coloquialismos) el mismo posee
      algunas irregularidades que dificultan el correcto entrenamiento de los modelos de
      clasificación.
      <br />
      Para el proceso de limpieza se realizaron las siguientes acciones:
      <br />
      1 -) Se eliminaron las URLs y Hashtag (@ y #) de los tweets.
      <br />
      2 -) Al realizar el paso anterior quedaron algunos tweets con poco contenido o
      simplemente con espaciones en blanco o solo con algunos artículos que no representan
      una oración en si mismo, estos tweets fueron eliminados.
      <br />
      3 -) Los caracteres acentuados fueron sustituidos por caracteres normales ejem:
      ḉ por c, á por a, í por i.
      <br />
      4 -) Finalmente se convirtieron todas las letras a minúsculas.
    </p>

    <h3 class="text-justify font-weight-bold">AFINN-165</h3>
    <p class="text-justify subheading font-weight-regular">
      AFINN es una lista de palabras clasificadas de forma balanceada con un número entero
      entre menos cinco (negativo) y más cinco (positivo). Las palabras han sido etiquetadas
      manualmente por Finn Årup Nielsen en 2009–2011.
      <br />
      Para la implementación de este listado se ha utilizado una
      <a href="https://www.npmjs.com/package/multilang-sentiment">librería</a>
      que tiene como propósito clasificar un texto ingresado en relación a la
      ponderación de cada una de sus palabras, para ello utiliza las siguientes técnicas:
      <br />
      1 -) Tokenización, el proceso de dividir un texto ingresado en palabras. <br />
      2 -) Stemming, para obtener la forma básica de cada palabra para que coincida
      mejor con las entradas de nuestro diccionario, ejemplo: reducir a singular las palabras en
      plural, llevar a presente los verbos en pasado. <br />
      3 -) Lematización, es el proceso de agrupar las formas flexionadas de una palabra para que
      puedan analizarse como un solo elemento. <br />
      4 -) Negaciones y sus variantes, Las negaciones son aquellas palabras (o construcciones)
      destinadas a voltear el valor entero de una palabra, por ejemplo: "hermoso" = 4;
      "No hermoso" = -4.
    </p>

    <h3 class="text-justify font-weight-bold">Naive Bayes classifier</h3>
    <p class="text-justify subheading font-weight-regular">
      La clasificación de texto también conocida como etiquetado de texto es el proceso de
      clasificar el texto en grupos organizados. Es decir, si ingresamos una nuevo texto
      desconocido, este modelo pueden decidir en qué categoría se ajusta más según su contenido.
      Comúnmente este modelo es usado para el análisis de sentimientos y por tal razón ha sido la
      elección para este proyecto.
      <br />
      Al igual que con el modelo anterior para la implementación de este utilizaremos una
      <a href="https://www.npmjs.com/package/bayes-classifier">librería</a>
      que utiliza el teorema de Bayes y de forma adicional incluye algunas de las técnicas
      anteriormente descritas como: Tokenización, Stemming y Lematización.
      <br />
      Para entrenar este modelo utilizaremos el dataset de la sociedad española de
      procesamiento del lenguaje natural que hemos procesado (limpiado) anteriormente. Utilizaremos
      el 70% de los datos para entrenar el modelo y el 30% para probar el mismo, estas proporciones
      serán extraídas de forma aleatorio del dataset.
      <br />
      <br />
      <strong>Resultados</strong>
      <br />
      <strong>Precisión (Accuracy):</strong> 60.61% <br/>
      <strong>Matriz de Confusión</strong>
      <table style="border-spacing: 20px;" class="text-center">
        <tr>
          <th></th>
          <th></th>
          <th colspan="2">Valor Predicho</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>Positivo</th>
          <th>Negativo</th>
        </tr>
        <tr>
          <td rowspan="2">
            <strong>Valor Real</strong>
          </td>
          <td>
            <strong>Positivo</strong>
          </td>
          <td>1061</td>
          <td>584</td>
        </tr>
        <tr>
          <td>
            <strong>Negativo</strong>
          </td>
          <td>974</td>
          <td>1336</td>
        </tr>
      </table>
      <br />
      Luego de ver los resultados de la matriz procedemos a realizar el calculo del Recall
      para verificar cual es la sensibilidad de nuestro modelo. <br />
      <strong>Recall (Sensibilidad):</strong> TP / ( TP + FP ) = 52.14% <br/>
    </p>

    <h3 class="text-justify font-weight-bold">Conclusiones</h3>
    <p class="text-justify subheading font-weight-regular">
      Estudios anteriores de análisis de sentimientos realizados en ingles
      muestran los siguientes resultados:
    </p>
    <table style="border-spacing: 10px;">
      <thead>
        <tr>
          <th>Dataset</th>
          <th>Presición</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Amazon</td>
          <td>70%</td>
        </tr>
        <tr>
          <td>IMDB</td>
          <td>76%</td>
        </tr>
        <tr>
          <td>Yelp</td>
          <td>67%</td>
        </tr>
      </tbody>
    </table>
    <p class="text-justify subheading font-weight-regular">
      Comparados con nuestros resultados podemos ver una diferencia en promedio de
      11% en cuanto a precisión, esto se puede explicar por varias razones: <br />
      1 -) Los dataset anteriormente mencionados han sido clasificados como positivos/negativos
      por los propios usuarios que realizaron los comentarios y no por personas externas
      como para nuestro caso. <br />
      2 -) El idioma ingles aun cuando posee coloquialismos como en el caso del español
      no posee una estructura sintáctica y semántica tan compleja. <br />
      El ejemplo en vivo que se muestra debajo incluye ambos modelos implementados
      más la capacidad de poder entrenar el modelo de Naive Bayes que en cuyo caso
      tendrá el diccionario del dataset de los tweets más lo valores ingresados
      por el usuario.
      <br />
      Sobre el futuro de este tema es difícil especular sobre cómo un sistema relativamente
      inmaduro evolucionará en el futuro, pero hay una creencia general de que el análisis
      de sentimiento necesita ir más allá de una escala unidimensional positiva-negativa.
      <br />
      Poder medir el escepticismo, la esperanza, la ansiedad, la emoción o la falta de ella
      serán funcionalidades que harán del análisis del sentimiento un modelo multidimensional.
    </p>

  </div>
</template>
<script lang="ts" src="./Description.ts">

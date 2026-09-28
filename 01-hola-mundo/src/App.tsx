// ============================================================
// 01 — Hola mundo: tu primer componente React con TypeScript
// ============================================================
// Un "componente" en React es una FUNCIÓN que devuelve JSX.
// JSX se parece a HTML, pero es JavaScript (por eso el .tsx).
// ============================================================

// App es un componente: una función que devuelve JSX.
// El tipo de retorno lo infiere TypeScript — no hace falta escribirlo.
function App() {
  // Este `return` es JSX: se parece a HTML, pero es JS.
  return (
    <main>
      <h1>Hola, mundo 👋</h1>
      <p>Este es mi primer componente React con TypeScript.</p>
    </main>
  )
}

// export default: así otros archivos pueden importar este componente.
export default App

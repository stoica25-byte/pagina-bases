// ==========================================
// Database Init & Alasql Setup
// ==========================================

// Initialize standard SCOTT and NBA tables
function initDatabase() {
  try {
    // Clear existing tables
    alasql('DROP TABLE IF EXISTS emp');
    alasql('DROP TABLE IF EXISTS dept');
    alasql('DROP TABLE IF EXISTS salgrade');
    alasql('DROP TABLE IF EXISTS bonus');
    alasql('DROP TABLE IF EXISTS equipos');
    alasql('DROP TABLE IF EXISTS jugadores');
    alasql('DROP TABLE IF EXISTS entrenadores');
    alasql('DROP TABLE IF EXISTS estadisticas');
    alasql('DROP TABLE IF EXISTS partidos');

    // Create SCOTT tables
    alasql('CREATE TABLE dept (deptno INT PRIMARY KEY, dname STRING, loc STRING)');
    alasql('CREATE TABLE emp (empno INT PRIMARY KEY, ename STRING, job STRING, mgr, hiredate STRING, sal INT, comm, deptno INT)');
    alasql('CREATE TABLE salgrade (grade INT PRIMARY KEY, losal INT, hisal INT)');
    alasql('CREATE TABLE bonus (ename STRING, job STRING, sal INT, comm)');

    // Insert DEPT seed data
    alasql('INSERT INTO dept VALUES (10, "ACCOUNTING", "NEW YORK")');
    alasql('INSERT INTO dept VALUES (20, "RESEARCH", "DALLAS")');
    alasql('INSERT INTO dept VALUES (30, "SALES", "CHICAGO")');
    alasql('INSERT INTO dept VALUES (40, "OPERATIONS", "BOSTON")');

    // Insert EMP seed data (14 standard employees)
    alasql('INSERT INTO emp VALUES (7839, "KING", "PRESIDENT", null, "1981-11-17", 5000, null, 10)');
    alasql('INSERT INTO emp VALUES (7698, "BLAKE", "MANAGER", 7839, "1981-05-01", 2850, null, 30)');
    alasql('INSERT INTO emp VALUES (7782, "CLARK", "MANAGER", 7839, "1981-06-09", 2450, null, 10)');
    alasql('INSERT INTO emp VALUES (7566, "JONES", "MANAGER", 7839, "1981-04-02", 2975, null, 20)');
    alasql('INSERT INTO emp VALUES (7788, "SCOTT", "ANALYST", 7566, "1987-04-19", 3000, null, 20)');
    alasql('INSERT INTO emp VALUES (7902, "FORD", "ANALYST", 7566, "1981-12-03", 3000, null, 20)');
    alasql('INSERT INTO emp VALUES (7369, "SMITH", "CLERK", 7902, "1980-12-17", 800, null, 20)');
    alasql('INSERT INTO emp VALUES (7499, "ALLEN", "SALESMAN", 7698, "1981-02-20", 1600, 300, 30)');
    alasql('INSERT INTO emp VALUES (7521, "WARD", "SALESMAN", 7698, "1981-02-22", 1250, 500, 30)');
    alasql('INSERT INTO emp VALUES (7654, "MARTIN", "SALESMAN", 7698, "1981-09-28", 1250, 1400, 30)');
    alasql('INSERT INTO emp VALUES (7844, "TURNER", "SALESMAN", 7698, "1981-09-08", 1500, 0, 30)');
    alasql('INSERT INTO emp VALUES (7876, "ADAMS", "CLERK", 7788, "1987-05-23", 1100, null, 20)');
    alasql('INSERT INTO emp VALUES (7900, "JAMES", "CLERK", 7698, "1981-12-03", 950, null, 30)');
    alasql('INSERT INTO emp VALUES (7934, "MILLER", "CLERK", 7782, "1982-01-23", 1300, null, 10)');

    // Insert SALGRADE seed data
    alasql('INSERT INTO salgrade VALUES (1, 700, 1200)');
    alasql('INSERT INTO salgrade VALUES (2, 1201, 1400)');
    alasql('INSERT INTO salgrade VALUES (3, 1401, 2000)');
    alasql('INSERT INTO salgrade VALUES (4, 2001, 3000)');
    alasql('INSERT INTO salgrade VALUES (5, 3001, 9999)');

    // Create NBA tables
    alasql('CREATE TABLE equipos (nombre STRING PRIMARY KEY, ciudad STRING, conferencia STRING, division STRING)');
    alasql('CREATE TABLE entrenadores (codigo INT PRIMARY KEY, nombre STRING, procedencia STRING, nombre_equipo STRING)');
    alasql('CREATE TABLE jugadores (codigo INT PRIMARY KEY, nombre STRING, procedencia STRING, altura STRING, peso INT, posicion STRING, nombre_equipo STRING, salario INT)');
    alasql('CREATE TABLE estadisticas (temporada STRING, jugador INT, puntos_por_partido FLOAT, asistencias_por_partido FLOAT, tapones_por_partido FLOAT, rebotes_por_partido FLOAT)');
    alasql('CREATE TABLE partidos (codigo INT PRIMARY KEY, equipo_local STRING, equipo_visitante STRING, puntos_local INT, puntos_visitante INT, temporada STRING)');

    // Insert EQUIPOS seed data
    alasql('INSERT INTO equipos VALUES ("Lakers", "Los Angeles", "West", "Pacific")');
    alasql('INSERT INTO equipos VALUES ("Celtics", "Boston", "East", "Atlantic")');
    alasql('INSERT INTO equipos VALUES ("Kings", "Sacramento", "West", "Pacific")');
    alasql('INSERT INTO equipos VALUES ("Timberwolves", "Minnesota", "West", "Northwest")');
    alasql('INSERT INTO equipos VALUES ("Warriors", "Golden State", "West", "Pacific")');

    // Insert ENTRENADORES seed data
    alasql('INSERT INTO entrenadores VALUES (1, "Phil Jackson", "North Dakota", "Lakers")');
    alasql('INSERT INTO entrenadores VALUES (2, "Doc Rivers", "Marquette", "Celtics")');
    alasql('INSERT INTO entrenadores VALUES (3, "Adelman", "Loyola", "Kings")');

    // Insert JUGADORES seed data
    alasql('INSERT INTO jugadores VALUES (1, "Corey Brewer", "Florida", "6-9", 185, "F-G", "Timberwolves", 1200000)');
    alasql('INSERT INTO jugadores VALUES (2, "Kobe Bryant", "Lower Merion", "6-6", 212, "G", "Lakers", 24000000)');
    alasql('INSERT INTO jugadores VALUES (3, "Kevin Garnett", "Farragut Academy", "6-11", 240, "F-C", "Celtics", 18000000)');
    alasql('INSERT INTO jugadores VALUES (4, "Kevin Martin", "Western Carolina", "6-7", 185, "G", "Kings", 9000000)');
    alasql('INSERT INTO jugadores VALUES (5, "Paul Pierce", "Kansas", "6-7", 235, "F", "Celtics", 15000000)');
    alasql('INSERT INTO jugadores VALUES (283, "Pau Gasol", "Spain", "7-0", 250, "F-C", "Lakers", 16000000)');

    // Insert ESTADISTICAS seed data
    alasql('INSERT INTO estadisticas VALUES ("03/04", 2, 24.0, 5.1, 0.4, 5.5)');
    alasql('INSERT INTO estadisticas VALUES ("03/04", 283, 17.5, 2.5, 1.4, 7.7)');
    alasql('INSERT INTO estadisticas VALUES ("04/05", 4, 24.6, 2.1, 0.1, 3.6)');
    alasql('INSERT INTO estadisticas VALUES ("07/08", 2, 28.3, 5.4, 0.5, 6.3)');
    alasql('INSERT INTO estadisticas VALUES ("07/08", 283, 18.8, 3.5, 1.6, 8.4)');

    // Insert PARTIDOS seed data
    alasql('INSERT INTO partidos VALUES (1, "Lakers", "Kings", 102, 95, "07/08")');
    alasql('INSERT INTO partidos VALUES (2, "Celtics", "Lakers", 98, 108, "07/08")');
    alasql('INSERT INTO partidos VALUES (3, "Kings", "Timberwolves", 112, 110, "07/08")');

    console.log("Database initialized successfully!");
  } catch (err) {
    console.error("Database initialization error:", err);
  }
}

// ==========================================
// CodeMirror Editor Inits (With Safe Textarea Fallbacks)
// ==========================================

// Helper to check if CodeMirror CSS has successfully loaded from the CDN
function isCodeMirrorCssLoaded() {
  try {
    const testDiv = document.createElement('div');
    testDiv.className = 'CodeMirror';
    document.body.appendChild(testDiv);
    const position = window.getComputedStyle(testDiv).position;
    document.body.removeChild(testDiv);
    return position === 'relative'; // In codemirror.css, .CodeMirror has position: relative
  } catch (e) {
    return false;
  }
}

let sqlEditor, plsqlEditor;

document.addEventListener("DOMContentLoaded", () => {
  initDatabase();
  
  const cssLoaded = isCodeMirrorCssLoaded();
  console.log("CodeMirror CSS loaded status:", cssLoaded);
  
  // 1. Init SQL Editor (Try CodeMirror only if both JS and CSS are available)
  let sqlSuccess = false;
  if (typeof CodeMirror !== 'undefined' && cssLoaded) {
    try {
      sqlEditor = CodeMirror.fromTextArea(document.getElementById("sql-editor"), {
        mode: "text/x-sql",
        theme: "dracula",
        lineNumbers: true,
        indentWithTabs: true,
        smartIndent: true,
        autofocus: false,
        extraKeys: {
          "Ctrl-Enter": function(cm) {
            executeSQLQuery();
          }
        }
      });
      sqlSuccess = true;
    } catch (e) {
      console.warn("Failed to instantiate CodeMirror for SQL:", e);
    }
  }
  
  if (!sqlSuccess) {
    const el = document.getElementById("sql-editor");
    el.style.display = "block"; // Ensure visible
    sqlEditor = {
      getValue: () => el.value,
      setValue: (val) => { el.value = val; },
      refresh: () => {},
      focus: () => el.focus()
    };
  }

  // 2. Init PL/SQL Editor (Try CodeMirror only if both JS and CSS are available)
  let plsqlSuccess = false;
  if (typeof CodeMirror !== 'undefined' && cssLoaded) {
    try {
      plsqlEditor = CodeMirror.fromTextArea(document.getElementById("plsql-editor"), {
        mode: "text/x-sql",
        theme: "dracula",
        lineNumbers: true,
        indentWithTabs: true,
        smartIndent: true,
        autofocus: false,
        extraKeys: {
          "Ctrl-Enter": function(cm) {
            compilePLSQL();
          }
        }
      });
      plsqlSuccess = true;
    } catch (e) {
      console.warn("Failed to instantiate CodeMirror for PL/SQL:", e);
    }
  }
  
  if (!plsqlSuccess) {
    const el = document.getElementById("plsql-editor");
    el.style.display = "block"; // Ensure visible
    plsqlEditor = {
      getValue: () => el.value,
      setValue: (val) => { el.value = val; },
      refresh: () => {},
      focus: () => el.focus()
    };
  }

  // Set default view on load
  showDbTable('emp');
  renderExercises();
  selectSqlExercise(0);
  selectPlsqlExercise(0);
  updateProgressBar();

  // Global keydown listener for Ctrl+Enter fallback (for standard textareas)
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "Enter") {
      const activePanel = document.querySelector(".tab-panel.active");
      if (activePanel) {
        if (activePanel.id === "panel-sql-playground" && !sqlSuccess) {
          e.preventDefault();
          executeSQLQuery();
        } else if (activePanel.id === "panel-plsql-lab" && !plsqlSuccess) {
          e.preventDefault();
          compilePLSQL();
        }
      }
    }
  });
});

// ==========================================
// Navigation & Tab Switching
// ==========================================

function switchTab(tabId) {
  // Hide all panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  
  // Deactivate sidebar nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });

  // Show active panel
  document.getElementById(`panel-${tabId}`).classList.add('active');
  document.getElementById(`nav-${tabId}`).classList.add('active');

  // Update header title
  const titles = {
    'dashboard': 'Panel General de Estudio',
    'sql-playground': 'Playground Práctico de Consultas SQL',
    'plsql-lab': 'Laboratorio de Programación PL/SQL',
    'norm-dcl': 'Laboratorio de Normalización y Seguridad (DCL)',
    'cheatsheets': 'Chuletas Rápidas y Referencias Teóricas'
  };
  document.getElementById('current-page-title').innerText = titles[tabId] || 'Laboratorio';

  // CodeMirror refresh is required when hidden containers become visible
  if (tabId === 'sql-playground') {
    sqlEditor.refresh();
    sqlEditor.focus();
    showDbTable(activeTableTab);
  } else if (tabId === 'plsql-lab') {
    plsqlEditor.refresh();
    plsqlEditor.focus();
  }
}

// Switching sub-cheatsheet topics
function switchTopic(topicId) {
  document.querySelectorAll('.topic-menu-item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelectorAll('.topic-content-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  document.getElementById(`topic-${topicId}`).classList.add('active');
  document.getElementById(`content-${topicId}`).classList.add('active');
}

// ==========================================
// Database Tables Viewer
// ==========================================

let activeTableTab = 'emp';

function showDbTable(tableName) {
  activeTableTab = tableName;
  
  // Update active tab buttons
  document.querySelectorAll('.table-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.innerText.toLowerCase() === tableName.toLowerCase()) {
      btn.classList.add('active');
    }
  });

  try {
    const data = alasql(`SELECT * FROM ${tableName}`);
    if (data && data.length > 0) {
      const keys = Object.keys(data[0]);
      
      let html = '<table class="db-table">';
      
      // Headers
      html += '<thead><tr>';
      keys.forEach(k => {
        html += `<th>${k}</th>`;
      });
      html += '</tr></thead>';
      
      // Rows
      html += '<tbody>';
      data.forEach(row => {
        html += '<tr>';
        keys.forEach(k => {
          let val = row[k];
          if (val === null || val === undefined) {
            val = '<span style="color:var(--text-muted);font-style:italic;">NULL</span>';
          }
          html += `<td>${val}</td>`;
        });
        html += '</tr>';
      });
      html += '</tbody></table>';
      
      document.getElementById('table-data-container').innerHTML = html;
    } else {
      document.getElementById('table-data-container').innerHTML = `
        <div style="color:var(--text-secondary); text-align:center; padding: 40px 0;">
          La tabla <strong>${tableName.toUpperCase()}</strong> está vacía o no tiene registros.
        </div>`;
    }
  } catch (err) {
    document.getElementById('table-data-container').innerHTML = `
      <div style="color:var(--accent-red); text-align:center; padding: 40px 0;">
        Error al leer la tabla: ${err.message}
      </div>`;
  }
}

function resetDbTables() {
  initDatabase();
  showDbTable(activeTableTab);
  
  const consoleEl = document.getElementById('sql-console');
  consoleEl.innerText = "Tablas reiniciadas al estado inicial con éxito.";
  consoleEl.className = "console-output";
}

// ==========================================
// Exercise Definitions & State
// ==========================================

const sqlExercises = [
  {
    title: "1. Borrar departamentos sin empleados",
    unit: "UD08: DML",
    difficulty: "easy",
    instructions: "Escribe una sentencia DELETE para borrar todos los departamentos de la tabla DEPT que no tengan ningún empleado en la tabla EMP.",
    startingCode: "DELETE FROM dept WHERE ...",
    solution: "DELETE FROM dept \nWHERE deptno NOT IN (\n  SELECT DISTINCT deptno \n  FROM emp \n  WHERE deptno IS NOT NULL\n);",
    verify: () => {
      const rows = alasql("SELECT COUNT(*) as cnt FROM dept WHERE deptno = 40")[0].cnt;
      const total = alasql("SELECT COUNT(*) as cnt FROM dept")[0].cnt;
      return rows === 0 && total === 3;
    }
  },
  {
    title: "2. Incrementar Salario (UPDATE)",
    unit: "UD08: DML",
    difficulty: "easy",
    instructions: "Incrementa el salario (campo 'sal') en un 10% a todos los empleados de la tabla 'emp' pertenecientes al departamento 20 (deptno = 20).",
    startingCode: "UPDATE emp SET sal = ... WHERE ...",
    solution: "UPDATE emp \nSET sal = sal * 1.1 \nWHERE deptno = 20;",
    verify: () => {
      const scottSal = alasql("SELECT sal FROM emp WHERE empno = 7788")[0].sal;
      const smithSal = alasql("SELECT sal FROM emp WHERE empno = 7369")[0].sal;
      return scottSal === 3300 && smithSal === 880;
    }
  },
  {
    title: "3. Auto-incrementar e Insertar",
    unit: "UD08: DML & Subconsultas",
    difficulty: "medium",
    instructions: "Inserta un nuevo departamento en la tabla DEPT. Su código ('deptno') debe ser calculado como el valor máximo de los departamentos actuales + 10. Su nombre ('dname') debe ser 'MARKETING' y su localización ('loc') 'SEVILLA'.",
    startingCode: "INSERT INTO dept (deptno, dname, loc) VALUES ((SELECT MAX(deptno) + 10 FROM dept), 'MARKETING', 'SEVILLA');",
    solution: "INSERT INTO dept (deptno, dname, loc) \nVALUES (\n  (SELECT MAX(deptno) + 10 FROM dept), \n  'MARKETING', \n  'SEVILLA'\n);",
    verify: () => {
      const row = alasql("SELECT * FROM dept WHERE dname = 'MARKETING'")[0];
      return row && row.deptno === 50 && row.loc === "SEVILLA";
    }
  },
  {
    title: "4. Incremento Condicional por Comisión",
    unit: "UD08: DML Avanzado",
    difficulty: "medium",
    instructions: "Sube un 15% el salario ('sal') a los empleados cuya comisión ('comm') sea superior al 20% de su propio salario.",
    startingCode: "UPDATE emp SET ...",
    solution: "UPDATE emp \nSET sal = sal * 1.15 \nWHERE comm > sal * 0.20;",
    verify: () => {
      const martinSal = alasql("SELECT sal FROM emp WHERE empno = 7654")[0].sal;
      const allenSal = alasql("SELECT sal FROM emp WHERE empno = 7499")[0].sal;
      return Math.abs(martinSal - 1437.5) < 1.0 && allenSal === 1600;
    }
  },
  {
    title: "5. Crear Vista de Empleados del Dept 10",
    unit: "UD09: Vistas",
    difficulty: "medium",
    instructions: "Crea una vista llamada 'vista_emp_dept10' que contenga las columnas 'empno', 'ename' y 'sal' de los empleados del departamento 10.",
    startingCode: "CREATE OR REPLACE VIEW vista_emp_dept10 AS SELECT ...",
    solution: "CREATE OR REPLACE VIEW vista_emp_dept10 AS \nSELECT empno, ename, sal \nFROM emp \nWHERE deptno = 10;",
    verify: () => {
      try {
        const rows = alasql("SELECT COUNT(*) as cnt FROM vista_emp_dept10")[0].cnt;
        const sample = alasql("SELECT ename FROM vista_emp_dept10 WHERE empno = 7839")[0].ename;
        return rows === 3 && sample === "KING";
      } catch(e) {
        return false;
      }
    }
  },
  {
    title: "6. Inserción con Jefe del Salario Máximo",
    unit: "UD08: DML Avanzado",
    difficulty: "hard",
    instructions: "Inserta un nuevo empleado en 'emp' con código 8000, nombre 'GARCIA', puesto 'ANALYST', departamento 10, y cuyo jefe ('mgr') sea automáticamente el empleado con el salario más alto actualmente en la empresa.",
    startingCode: "INSERT INTO emp (empno, ename, job, mgr, deptno) VALUES (8000, 'GARCIA', 'ANALYST', (SELECT ...), 10);",
    solution: "INSERT INTO emp (empno, ename, job, mgr, deptno) \nVALUES (\n  8000, \n  'GARCIA', \n  'ANALYST', \n  (SELECT empno FROM emp WHERE sal = (SELECT MAX(sal) FROM emp)), \n  10\n);",
    verify: () => {
      const row = alasql("SELECT * FROM emp WHERE empno = 8000")[0];
      return row && row.ename === "GARCIA" && row.mgr === 7839;
    }
  },
  {
    title: "7. Borrar Estadísticas NBA Obsoletas",
    unit: "UD08 & NBA",
    difficulty: "hard",
    instructions: "Borra de la tabla 'estadisticas' todos los registros del jugador con código 2 (Kobe Bryant) que correspondan a temporadas anteriores a '05/06' (por ejemplo, '03/04').",
    startingCode: "DELETE FROM estadisticas WHERE jugador = 2 AND ...",
    solution: "DELETE FROM estadisticas \nWHERE jugador = 2 \nAND temporada < '05/06';",
    verify: () => {
      const cnt = alasql("SELECT COUNT(*) as cnt FROM estadisticas WHERE jugador = 2 AND temporada = '03/04'")[0].cnt;
      const cntPost = alasql("SELECT COUNT(*) as cnt FROM estadisticas WHERE jugador = 2 AND temporada = '07/08'")[0].cnt;
      return cnt === 0 && cntPost === 1;
    }
  }
];

const plsqlExercises = [
  {
    title: "1. Hola Mundo en PL/SQL",
    unit: "UD10: Bloques",
    difficulty: "easy",
    instructions: "Escribe un bloque PL/SQL anónimo que declare una variable de tipo VARCHAR2 llamada 'v_mensaje' inicializada con el valor 'Hola', y visualízala en consola usando 'DBMS_OUTPUT.PUT_LINE'.",
    startingCode: `DECLARE
  v_mensaje VARCHAR2(20) := 'Hola';
BEGIN
  DBMS_OUTPUT.PUT_LINE(v_mensaje);
END;`,
    solution: `DECLARE
  v_mensaje VARCHAR2(20) := 'Hola';
BEGIN
  DBMS_OUTPUT.PUT_LINE(v_mensaje);
END;`,
    tests: [
      { name: "Contiene estructura DECLARE-BEGIN-END", check: (code) => /DECLARE/i.test(code) && /BEGIN/i.test(code) && /END\s*;/i.test(code) },
      { name: "Visualiza el mensaje 'Hola'", check: (code, stdout) => stdout.trim() === "Hola" }
    ]
  },
  {
    title: "2. Suma de Parámetros",
    unit: "UD10: Procedimientos",
    difficulty: "easy",
    instructions: "Crea o simula un procedimiento llamado 'sumar' que reciba dos parámetros enteros y los sume, imprimiendo el resultado con 'DBMS_OUTPUT.PUT_LINE'. Puedes representarlo con un bloque de llamada de prueba.",
    startingCode: `DECLARE
  v_n1 NUMBER := 8;
  v_n2 NUMBER := 12;
  v_suma NUMBER;
BEGIN
  v_suma := v_n1 + v_n2;
  DBMS_OUTPUT.PUT_LINE('Resultado: ' || v_suma);
END;`,
    solution: `DECLARE
  v_n1 NUMBER := 8;
  v_n2 NUMBER := 12;
  v_suma NUMBER;
BEGIN
  v_suma := v_n1 + v_n2;
  DBMS_OUTPUT.PUT_LINE('Resultado: ' || v_suma);
END;`,
    tests: [
      { name: "Declara variables numéricas", check: (code) => /NUMBER/i.test(code) },
      { name: "Calcula e imprime la suma correctamente", check: (code, stdout) => stdout.includes("Resultado: 20") }
    ]
  },
  {
    title: "3. Cadena al Revés",
    unit: "UD10: Procedimientos",
    difficulty: "easy",
    instructions: "Diseña un bloque que simule revertir una cadena. Puedes declarar una variable con la palabra 'ORACLE' y utilizar lógica de asignación o impresión para mostrar la palabra al revés ('ELCARO').",
    startingCode: `DECLARE
  v_palabra VARCHAR2(20) := 'ORACLE';
  v_reversa VARCHAR2(20) := 'ELCARO';
BEGIN
  DBMS_OUTPUT.PUT_LINE(v_reversa);
END;`,
    solution: `DECLARE
  v_palabra VARCHAR2(20) := 'ORACLE';
  v_reversa VARCHAR2(20) := 'ELCARO';
BEGIN
  DBMS_OUTPUT.PUT_LINE(v_reversa);
END;`,
    tests: [
      { name: "Declara la variable de texto", check: (code) => /VARCHAR2/i.test(code) },
      { name: "Imprime la cadena invertida 'ELCARO'", check: (code, stdout) => stdout.trim() === "ELCARO" }
    ]
  },
  {
    title: "4. Excepciones: Empleado Inexistente",
    unit: "UD10: Excepciones",
    difficulty: "medium",
    instructions: "Escribe un bloque que consulte el apellido ('ename') de un empleado con código 'empno = 9999'. Como no existe, Oracle lanzará la excepción 'NO_DATA_FOUND'. Captúrala en la sección EXCEPTION e imprime el texto 'Empleado no encontrado'.",
    startingCode: `DECLARE
  v_nom emp.ename%TYPE;
BEGIN
  SELECT ename INTO v_nom FROM emp WHERE empno = 9999;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Empleado no encontrado');
END;`,
    solution: `DECLARE
  v_nom emp.ename%TYPE;
BEGIN
  SELECT ename INTO v_nom FROM emp WHERE empno = 9999;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Empleado no encontrado');
END;`,
    tests: [
      { name: "Incluye sección EXCEPTION", check: (code) => /EXCEPTION/i.test(code) },
      { name: "Captura NO_DATA_FOUND", check: (code) => /NO_DATA_FOUND/i.test(code) },
      { name: "Imprime 'Empleado no encontrado'", check: (code, stdout) => stdout.includes("Empleado no encontrado") }
    ]
  },
  {
    title: "5. NBA: Ciudad de un Equipo",
    unit: "UD10 & NBA",
    difficulty: "medium",
    instructions: "Crea un bloque PL/SQL que consulte la ciudad, conferencia y división del equipo 'Kings' y muestre los datos en el siguiente formato: 'Ciudad: Sacramento Conferencia: West'.",
    startingCode: `DECLARE
  v_ciudad equipos.ciudad%TYPE;
  v_conf equipos.conferencia%TYPE;
BEGIN
  SELECT ciudad, conferencia INTO v_ciudad, v_conf FROM equipos WHERE nombre = 'Kings';
  DBMS_OUTPUT.PUT_LINE('Ciudad: ' || v_ciudad || ' Conferencia: ' || v_conf);
END;`,
    solution: `DECLARE
  v_ciudad equipos.ciudad%TYPE;
  v_conf equipos.conferencia%TYPE;
BEGIN
  SELECT ciudad, conferencia INTO v_ciudad, v_conf FROM equipos WHERE nombre = 'Kings';
  DBMS_OUTPUT.PUT_LINE('Ciudad: ' || v_ciudad || ' Conferencia: ' || v_conf);
END;`,
    tests: [
      { name: "Realiza SELECT INTO desde equipos", check: (code) => /SELECT.*INTO.*FROM\s+equipos/i.test(code) },
      { name: "Imprime 'Ciudad: Sacramento Conferencia: West'", check: (code, stdout) => stdout.includes("Ciudad: Sacramento Conferencia: West") }
    ]
  },
  {
    title: "6. Excepciones: Entrenador Duplicado",
    unit: "UD10 & NBA",
    difficulty: "hard",
    instructions: "Crea un bloque que intente insertar un entrenador con un código de entrenador ya existente en la tabla ENTRENADORES (por ejemplo, codigo = 1). Esto lanzará la excepción de clave única duplicada 'DUP_VAL_ON_INDEX'. Captúrala e imprime el mensaje 'Código duplicado'.",
    startingCode: `BEGIN
  INSERT INTO entrenadores VALUES (1, 'Adelman Duplicado', 'Loyola', 'Kings');
EXCEPTION
  WHEN DUP_VAL_ON_INDEX THEN
    DBMS_OUTPUT.PUT_LINE('Código duplicado');
END;`,
    solution: `BEGIN
  INSERT INTO entrenadores (codigo, nombre, procedencia, nombre_equipo)
  VALUES (1, 'Adelman Duplicado', 'Loyola', 'Kings');
EXCEPTION
  WHEN DUP_VAL_ON_INDEX THEN
    DBMS_OUTPUT.PUT_LINE('Código duplicado');
END;`,
    tests: [
      { name: "Intenta insertar el registro con PK = 1", check: (code) => /INSERT\s+INTO\s+entrenadores/i.test(code) && /1/i.test(code) },
      { name: "Captura la excepción DUP_VAL_ON_INDEX", check: (code) => /DUP_VAL_ON_INDEX/i.test(code) },
      { name: "Imprime 'Código duplicado'", check: (code, stdout) => stdout.includes("Código duplicado") }
    ]
  },
  {
    title: "7. Años de Servicio de un Empleado",
    unit: "UD10: Funciones",
    difficulty: "medium",
    instructions: "Escribe un bloque PL/SQL que calcule los años de servicio transcurridos desde una fecha de alta. Simula la contratación de 'KING' (fecha de alta '1981-11-17'). Con la fecha actual (2026), KING lleva 44 años de servicio. Imprime el resultado en el formato: 'Anios de servicio: 44'.",
    startingCode: `DECLARE
  v_fecha_alta DATE := TO_DATE('1981-11-17', 'YYYY-MM-DD');
  v_fecha_actual DATE := TO_DATE('2026-05-24', 'YYYY-MM-DD');
  v_anios NUMBER;
BEGIN
  v_anios := TRUNC((v_fecha_actual - v_fecha_alta) / 365.25);
  DBMS_OUTPUT.PUT_LINE('Anios de servicio: ' || v_anios);
END;`,
    solution: `DECLARE
  v_fecha_alta DATE := TO_DATE('1981-11-17', 'YYYY-MM-DD');
  v_fecha_actual DATE := TO_DATE('2026-05-24', 'YYYY-MM-DD');
  v_anios NUMBER;
BEGIN
  v_anios := TRUNC((v_fecha_actual - v_fecha_alta) / 365.25);
  DBMS_OUTPUT.PUT_LINE('Anios de servicio: ' || v_anios);
END;`,
    tests: [
      { name: "Declara v_anios NUMBER", check: (code) => /v_anios\s+NUMBER/i.test(code) },
      { name: "Muestra 'Anios de servicio: 44'", check: (code, stdout) => stdout.includes("Anios de servicio: 44") }
    ]
  },
  {
    title: "8. Trienios Acumulados",
    unit: "UD10: Funciones",
    difficulty: "hard",
    instructions: "Escribe un bloque que calcule el número de trienios (períodos de 3 años completos) de un empleado a partir de sus años de servicio. Para 44 años de servicio, le corresponden 14 trienios. Muestra el resultado como: 'Trienios: 14'.",
    startingCode: `DECLARE
  v_anios NUMBER := 44;
  v_trienios NUMBER;
BEGIN
  v_trienios := TRUNC(v_anios / 3);
  DBMS_OUTPUT.PUT_LINE('Trienios: ' || v_trienios);
END;`,
    solution: `DECLARE
  v_anios NUMBER := 44;
  v_trienios NUMBER;
BEGIN
  v_trienios := TRUNC(v_anios / 3);
  DBMS_OUTPUT.PUT_LINE('Trienios: ' || v_trienios);
END;`,
    tests: [
      { name: "Divide los años entre 3", check: (code) => /\/\s*3/i.test(code) },
      { name: "Imprime 'Trienios: 14'", check: (code, stdout) => stdout.includes("Trienios: 14") }
    ]
  },
  {
    title: "9. Desglose de Cambio (Monedas)",
    unit: "UD10: Procedimientos",
    difficulty: "hard",
    instructions: "Codifica un bloque PL/SQL que simule el desglose de un importe (en este caso 88 euros) en billetes de 50€, 20€, 10€, 5€, y monedas de 2€ y 1€. Imprime en consola los billetes o monedas necesarios (ej. 'Billetes 50: 1 Billetes 20: 1 Billetes 10: 0 Billetes 5: 1 Monedas 2: 1 Monedas 1: 1').",
    startingCode: `DECLARE
  v_importe NUMBER := 88;
  v_50 NUMBER; v_20 NUMBER; v_10 NUMBER; v_5 NUMBER; v_2 NUMBER; v_1 NUMBER;
BEGIN
  v_50 := TRUNC(v_importe / 50); v_importe := MOD(v_importe, 50);
  v_20 := TRUNC(v_importe / 20); v_importe := MOD(v_importe, 20);
  v_10 := TRUNC(v_importe / 10); v_importe := MOD(v_importe, 10);
  v_5 := TRUNC(v_importe / 5); v_importe := MOD(v_importe, 5);
  v_2 := TRUNC(v_importe / 2); v_importe := MOD(v_importe, 2);
  v_1 := v_importe;
  
  DBMS_OUTPUT.PUT_LINE('Billetes 50: ' || v_50 || ' Billetes 20: ' || v_20 || ' Billetes 10: ' || v_10 || ' Billetes 5: ' || v_5 || ' Monedas 2: ' || v_2 || ' Monedas 1: ' || v_1);
END;`,
    solution: `DECLARE
  v_importe NUMBER := 88;
  v_50 NUMBER; v_20 NUMBER; v_10 NUMBER; v_5 NUMBER; v_2 NUMBER; v_1 NUMBER;
BEGIN
  v_50 := TRUNC(v_importe / 50); v_importe := MOD(v_importe, 50);
  v_20 := TRUNC(v_importe / 20); v_importe := MOD(v_importe, 20);
  v_10 := TRUNC(v_importe / 10); v_importe := MOD(v_importe, 10);
  v_5 := TRUNC(v_importe / 5); v_importe := MOD(v_importe, 5);
  v_2 := TRUNC(v_importe / 2); v_importe := MOD(v_importe, 2);
  v_1 := v_importe;
  
  DBMS_OUTPUT.PUT_LINE('Billetes 50: ' || v_50 || ' Billetes 20: ' || v_20 || ' Billetes 10: ' || v_10 || ' Billetes 5: ' || v_5 || ' Monedas 2: ' || v_2 || ' Monedas 1: ' || v_1);
END;`,
    tests: [
      { name: "Utiliza funciones TRUNC y MOD", check: (code) => /TRUNC/i.test(code) && /MOD/i.test(code) },
      { name: "Desglosa correctamente 88€", check: (code, stdout) => stdout.includes("Billetes 50: 1") && stdout.includes("Billetes 20: 1") && stdout.includes("Monedas 2: 1") }
    ]
  }
];

let activeSqlExerciseIndex = 0;
let activePlsqlExerciseIndex = 0;

// Track completion states of all exercises (20 total: 7 SQL + 9 PLSQL + 3 DCL + 1 Normalization)
const exerciseCompletion = {
  sql: [false, false, false, false, false, false, false],
  plsql: [false, false, false, false, false, false, false, false, false],
  dcl1: false,
  dcl2: false,
  dcl3: false,
  norm: false
};

// Render exercise sidebars
function renderExercises() {
  // 1. Render SQL list
  const sqlList = document.getElementById("sql-exercise-list");
  sqlList.innerHTML = "";
  sqlExercises.forEach((ex, idx) => {
    const isCompleted = exerciseCompletion.sql[idx];
    const item = document.createElement("div");
    item.className = `exercise-item ${idx === activeSqlExerciseIndex ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    item.onclick = () => selectSqlExercise(idx);
    
    let diffText = "Fácil";
    if (ex.difficulty === "medium") diffText = "Medio";
    if (ex.difficulty === "hard") diffText = "Difícil";
    
    item.innerHTML = `
      <div class="exercise-status-dot"></div>
      <div class="exercise-item-content">
        <div class="exercise-header-row">
          <span class="exercise-unit">${ex.unit}</span>
          <span class="difficulty-badge ${ex.difficulty}">${diffText}</span>
        </div>
        <span class="exercise-title">${ex.title}</span>
      </div>
    `;
    sqlList.appendChild(item);
  });

  // 2. Render PL/SQL list
  const plsqlList = document.getElementById("plsql-exercise-list");
  plsqlList.innerHTML = "";
  plsqlExercises.forEach((ex, idx) => {
    const isCompleted = exerciseCompletion.plsql[idx];
    const item = document.createElement("div");
    item.className = `exercise-item ${idx === activePlsqlExerciseIndex ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    item.onclick = () => selectPlsqlExercise(idx);
    
    let diffText = "Fácil";
    if (ex.difficulty === "medium") diffText = "Medio";
    if (ex.difficulty === "hard") diffText = "Difícil";
    
    item.innerHTML = `
      <div class="exercise-status-dot"></div>
      <div class="exercise-item-content">
        <div class="exercise-header-row">
          <span class="exercise-unit">${ex.unit}</span>
          <span class="difficulty-badge ${ex.difficulty}">${diffText}</span>
        </div>
        <span class="exercise-title">${ex.title}</span>
      </div>
    `;
    plsqlList.appendChild(item);
  });
}

function selectSqlExercise(index) {
  activeSqlExerciseIndex = index;
  const ex = sqlExercises[index];
  
  // Set instructions and load code
  document.getElementById("sql-exercise-instructions").innerText = ex.instructions;
  document.getElementById("sql-exercise-solution").innerText = ex.solution || "-- No hay solución definida";
  document.getElementById("sql-solution-details").removeAttribute("open");
  sqlEditor.setValue(ex.startingCode);
  
  renderExercises();
  
  // Clear console
  const consoleEl = document.getElementById('sql-console');
  consoleEl.innerText = `Cargado: ${ex.title}. Listo para ejecutar.`;
  consoleEl.className = "console-output";
}

function selectPlsqlExercise(index) {
  activePlsqlExerciseIndex = index;
  const ex = plsqlExercises[index];
  
  // Set instructions and load code
  document.getElementById("plsql-ex-title").innerText = ex.title;
  document.getElementById("plsql-ex-instructions").innerHTML = ex.instructions;
  document.getElementById("plsql-exercise-solution").innerText = ex.solution || "-- No hay solución definida";
  document.getElementById("plsql-solution-details").removeAttribute("open");
  plsqlEditor.setValue(ex.startingCode);
  
  renderExercises();
  renderPlsqlTests();
  
  // Clear console
  const consoleEl = document.getElementById('plsql-console');
  consoleEl.innerText = `Cargado: ${ex.title}. Pulsa 'Compilar y Ejecutar' para correr las pruebas.`;
  consoleEl.className = "console-output";
}

function renderPlsqlTests(passedList = []) {
  const ex = plsqlExercises[activePlsqlExerciseIndex];
  const container = document.getElementById("plsql-test-results");
  container.innerHTML = "";
  
  ex.tests.forEach((test, idx) => {
    const isPassed = passedList[idx];
    const statusText = isPassed ? "Correcto" : "Pendiente";
    const statusClass = isPassed ? "success" : "pending";
    
    const row = document.createElement("div");
    row.style.cssText = "display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:rgba(255,255,255,0.02); border-radius:6px; font-size:0.8rem;";
    row.innerHTML = `
      <span>${test.name}</span>
      <span class="status-badge ${statusClass}">${statusText}</span>
    `;
    container.appendChild(row);
  });
}

// ==========================================
// SQL Execution & Evaluation
// ==========================================

function executeSQLQuery() {
  const query = sqlEditor.getValue().trim();
  const consoleEl = document.getElementById('sql-console');
  
  if (!query) {
    consoleEl.innerHTML = `<div class="console-result-summary error">Error: El editor está vacío.</div>`;
    consoleEl.className = "console-output error";
    return;
  }

  try {
    let processedQuery = query;
    const isModifying = /^\s*(DELETE|UPDATE|INSERT)/i.test(query);
    
    if (isModifying) {
      try {
        processedQuery = preprocessSQL(query);
        console.log("Preprocessed DML SQL:", processedQuery);
      } catch (e) {
        console.warn("Failed to preprocess DML SQL, running original:", e);
      }
    }
    
    // Run query using Alasql
    const result = alasql(processedQuery);
    
    // Refresh tables view
    showDbTable(activeTableTab);
    
    let htmlContent = "";
    
    // Check if it's a SELECT or modifying statement
    if (Array.isArray(result)) {
      htmlContent += `<div class="console-result-summary">Consulta ejecutada con éxito. Filas devueltas: ${result.length}</div>`;
      
      if (result.length > 0) {
        const keys = Object.keys(result[0]);
        htmlContent += '<div class="console-table-container"><table class="db-table">';
        
        // Headers
        htmlContent += '<thead><tr>';
        keys.forEach(k => {
          htmlContent += `<th>${k}</th>`;
        });
        htmlContent += '</tr></thead>';
        
        // Rows
        htmlContent += '<tbody>';
        result.forEach(row => {
          htmlContent += '<tr>';
          keys.forEach(k => {
            let val = row[k];
            if (val === null || val === undefined) {
              val = '<span style="color:var(--text-muted);font-style:italic;">NULL</span>';
            }
            htmlContent += `<td>${val}</td>`;
          });
          htmlContent += '</tr>';
        });
        htmlContent += '</tbody></table></div>';
      }
    } else {
      htmlContent += `<div class="console-result-summary">Sentencia ejecutada con éxito. Filas afectadas / Valor: ${result}</div>`;
    }
    
    consoleEl.innerHTML = htmlContent;
    consoleEl.className = "console-output success";
    
    // Evaluate if the active exercise is solved
    const ex = sqlExercises[activeSqlExerciseIndex];
    if (ex && typeof ex.verify === 'function' && ex.verify()) {
      exerciseCompletion.sql[activeSqlExerciseIndex] = true;
      
      const successBanner = `
        <div class="console-success-banner">
          <svg style="width:16px;height:16px;" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          ¡Excelente! Has resuelto este ejercicio correctamente.
        </div>`;
        
      consoleEl.innerHTML = successBanner + consoleEl.innerHTML;
      renderExercises();
      updateProgressBar();
    }
  } catch (err) {
    consoleEl.innerHTML = `
      <div class="console-result-summary error">Oracle SQL Error:</div>
      <pre style="margin-top: 5px; color: var(--accent-red); font-family: inherit; white-space: pre-wrap;">${err.message}</pre>`;
    consoleEl.className = "console-output error";
  }
}

// Preprocessor to resolve DML subqueries (workaround for AlaSQL 'p is not defined' compiler bugs)
function preprocessSQL(query) {
  let modifiedQuery = query;
  let iterations = 0;
  
  // Find innermost SELECT subqueries enclosed in parentheses: (SELECT ...)
  const subqueryRegex = /\(\s*(SELECT\s+(?:(?!SELECT)[\s\S])+?)\)/i;
  
  while (iterations < 10) {
    const match = modifiedQuery.match(subqueryRegex);
    if (!match) break;
    
    const fullMatch = match[0];
    const subquery = match[1];
    
    // Execute subquery
    const data = alasql(subquery);
    let replacement = "NULL";
    
    if (data && data.length > 0) {
      const keys = Object.keys(data[0]);
      const list = data.map(row => {
        const val = row[keys[0]];
        if (typeof val === 'string') return `'${val}'`;
        if (val === null || val === undefined) return "NULL";
        return val;
      });
      replacement = list.join(', ');
    }
    
    modifiedQuery = modifiedQuery.replace(fullMatch, `(${replacement})`);
    iterations++;
  }
  
  return modifiedQuery;
}

// ==========================================
// PL/SQL Simulation Compiler
// ==========================================

function compilePLSQL() {
  const code = plsqlEditor.getValue().trim();
  const consoleEl = document.getElementById('plsql-console');
  
  let stdout = "";
  let errorMsg = null;
  
  // Custom mock execution engine for PL/SQL syntax
  try {
    // 1. Basic lexical check: DECLARE, BEGIN, END;
    if (!/BEGIN/i.test(code) && !/END\s*;/i.test(code)) {
      throw new Error("PLS-00103: Se encontró fin de archivo inesperado. Falta BEGIN o END;");
    }

    // 2. Parse DBMS_OUTPUT.PUT_LINE calls
    // Example: DBMS_OUTPUT.PUT_LINE('Resultado: ' || v_suma);
    // Let's extract variables to evaluate expressions
    const variables = {};

    // Check DECLARE section variables
    const declareMatch = code.match(/DECLARE([\s\S]*?)BEGIN/i);
    if (declareMatch) {
      const declareBlock = declareMatch[1];
      const lines = declareBlock.split(';');
      lines.forEach(line => {
        line = line.trim();
        if (!line) return;
        
        // Match standard declarations like: v_mensaje VARCHAR2(20) := 'Hola'
        // or v_num NUMBER := 10
        const varMatch = line.match(/(\w+)\s+(\w+(?:\(\d+\))?|[\w\.]+%TYPE)\s*(?::=\s*(.*))?/i);
        if (varMatch) {
          const name = varMatch[1].toLowerCase();
          let rawVal = varMatch[3] ? varMatch[3].trim() : "NULL";
          
          // Evaluate standard types
          if (rawVal.startsWith("'") && rawVal.endsWith("'")) {
            variables[name] = rawVal.slice(1, -1);
          } else if (!isNaN(rawVal)) {
            variables[name] = Number(rawVal);
          } else {
            variables[name] = rawVal;
          }
        }
      });
    }

    // 3. Mock SQL execution in PL/SQL block
    // Handle SELECT ename INTO v_nom FROM emp WHERE empno = 9999;
    const selectIntoMatch = code.match(/SELECT\s+(.+?)\s+INTO\s+(.+?)\s+FROM\s+(.+?)\s+WHERE\s+(.+?)(?:;|$)/i);
    if (selectIntoMatch) {
      const selectFields = selectIntoMatch[1].trim();
      const intoVars = selectIntoMatch[2].trim().toLowerCase();
      const fromTable = selectIntoMatch[3].trim();
      const whereClause = selectIntoMatch[4].trim();

      // Convert to alasql query
      let alasqlQuery = `SELECT ${selectFields} FROM ${fromTable} WHERE ${whereClause}`;
      
      // Replace variables in where clause if any
      // E.g., empno = 9999
      let rows;
      try {
        rows = alasql(alasqlQuery);
      } catch (sqlErr) {
        throw new Error(`ORA-00904: identificador no válido en SQL interno: ${sqlErr.message}`);
      }

      if (!rows || rows.length === 0) {
        // Exception handler check
        if (/WHEN\s+NO_DATA_FOUND/i.test(code)) {
          // Trigger exception block
          const excBlock = code.match(/EXCEPTION[\s\S]*?WHEN\s+NO_DATA_FOUND\s+THEN([\s\S]*?)(?:WHEN|END)/i);
          if (excBlock) {
            const excStatements = excBlock[1];
            const putLineMatch = excStatements.match(/DBMS_OUTPUT\.PUT_LINE\((.*?)\)/i);
            if (putLineMatch) {
              stdout = evalPLSQLExpression(putLineMatch[1], variables);
            }
          }
        } else {
          throw new Error("ORA-01403: No se encontraron datos (NO_DATA_FOUND)");
        }
      } else if (rows.length > 1) {
        if (/WHEN\s+TOO_MANY_ROWS/i.test(code)) {
          const excBlock = code.match(/EXCEPTION[\s\S]*?WHEN\s+TOO_MANY_ROWS\s+THEN([\s\S]*?)(?:WHEN|END)/i);
          if (excBlock) {
            const putLineMatch = excBlock[1].match(/DBMS_OUTPUT\.PUT_LINE\((.*?)\)/i);
            if (putLineMatch) stdout = evalPLSQLExpression(putLineMatch[1], variables);
          }
        } else {
          throw new Error("ORA-01422: La recuperación exacta devuelve más del número solicitado de filas");
        }
      } else {
        // Success case, assign variables
        variables[intoVars] = rows[0][selectFields];
      }
    }

    // Handle INSERT/UPDATE statements in PL/SQL block
    const insertMatch = code.match(/INSERT\s+INTO\s+(\w+)\s+VALUES\s*\((.*?)\)(?:;|$)/i);
    if (insertMatch && !selectIntoMatch) {
      const table = insertMatch[1].toLowerCase();
      const vals = insertMatch[2].split(',');
      
      if (table === 'entrenadores') {
        const pkVal = parseInt(vals[0].trim());
        // Check duplication
        const existing = alasql(`SELECT COUNT(*) as cnt FROM entrenadores WHERE codigo = ${pkVal}`)[0].cnt;
        if (existing > 0) {
          if (/WHEN\s+DUP_VAL_ON_INDEX/i.test(code)) {
            const excBlock = code.match(/EXCEPTION[\s\S]*?WHEN\s+DUP_VAL_ON_INDEX\s+THEN([\s\S]*?)(?:WHEN|END)/i);
            if (excBlock) {
              const putLineMatch = excBlock[1].match(/DBMS_OUTPUT\.PUT_LINE\((.*?)\)/i);
              if (putLineMatch) stdout = evalPLSQLExpression(putLineMatch[1], variables);
            }
          } else {
            throw new Error("ORA-00001: Restricción única violada (DUP_VAL_ON_INDEX)");
          }
        } else {
          // Run insert
          alasql(insertMatch[0]);
          stdout = "Fila insertada con éxito en entrenadores.";
        }
      }
    }

    // 4. Fallback execution of PUT_LINE in BEGIN body
    if (!stdout) {
      // Find DBMS_OUTPUT.PUT_LINE calls inside the main BEGIN block (excluding EXCEPTION)
      const beginBlock = code.match(/BEGIN([\s\S]*?)(?:EXCEPTION|END)/i)[1];
      const putLineMatches = beginBlock.matchAll(/DBMS_OUTPUT\.PUT_LINE\((.*?)\)/gi);
      let outputs = [];
      for (const m of putLineMatches) {
        outputs.push(evalPLSQLExpression(m[1], variables));
      }
      stdout = outputs.join('\n');
    }

  } catch (err) {
    errorMsg = err.message;
  }

  // Render compilation console
  if (errorMsg) {
    consoleEl.innerText = `PL/SQL Compilation Error:\n${errorMsg}`;
    consoleEl.className = "console-output error";
    
    // Show tests as failed
    renderPlsqlTests([false, false]);
  } else {
    consoleEl.innerText = `Procedimiento ejecutado con éxito.\n--------------------------------\n${stdout}`;
    consoleEl.className = "console-output success";
    
    // Evaluate tests
    const ex = plsqlExercises[activePlsqlExerciseIndex];
    const testResults = ex.tests.map(test => test.check(code, stdout));
    renderPlsqlTests(testResults);
    
    // If all tests passed, mark exercise as completed
    const allPassed = testResults.every(r => r === true);
    if (allPassed) {
      exerciseCompletion.plsql[activePlsqlExerciseIndex] = true;
      consoleEl.innerText = "¡Pruebas superadas con éxito! ¡Ejercicio completado!\n\n" + consoleEl.innerText;
      renderExercises();
      updateProgressBar();
    }
  }
}

// Evaluate PL/SQL expressions like: 'Resultado: ' || v_suma
function evalPLSQLExpression(expr, variables) {
  expr = expr.trim();
  
  // Splitting by concatenation operator '||'
  const parts = expr.split('||');
  const resolvedParts = parts.map(part => {
    part = part.trim();
    // Literal string
    if (part.startsWith("'") && part.endsWith("'")) {
      return part.slice(1, -1);
    }
    // Variable lookup
    const varName = part.toLowerCase();
    if (varName in variables) {
      return variables[varName];
    }
    return part;
  });
  
  return resolvedParts.join('');
}

// ==========================================
// DCL & Normalization Validators
// ==========================================

function checkDCLAnswer(num) {
  const inputEl = document.getElementById(`dcl-ex${num}-input`);
  const feedbackEl = document.getElementById(`dcl-ex${num}-feedback`);
  const ans = inputEl.value.trim().toUpperCase();
  
  let isCorrect = false;
  let msg = "";
  
  if (num === 1) {
    // CREATE USER GESTION_NBA IDENTIFIED BY nba123 DEFAULT TABLESPACE USERS QUOTA UNLIMITED ON USERS
    const hasCreate = ans.includes("CREATE USER GESTION_NBA");
    const hasPass = ans.includes("IDENTIFIED BY NBA123");
    const hasTablespace = ans.includes("DEFAULT TABLESPACE USERS");
    const hasQuota = ans.includes("QUOTA UNLIMITED ON USERS") || ans.includes("QUOTA UNLIMITED");
    
    isCorrect = hasCreate && hasPass && (hasTablespace || hasQuota);
    msg = isCorrect ? "¡Correcto! Sentencia DCL de creación de usuario perfecta." : "Incompleto o incorrecto. Recuerda usar: CREATE USER ... IDENTIFIED BY ... [QUOTA ... ON USERS]";
  } else if (num === 2) {
    // GRANT CREATE SESSION, SELECT ON jugadores TO GESTION_NBA
    // Wait, let's accept either single GRANT or combined
    const hasGrant = ans.startsWith("GRANT");
    const hasCreateSession = ans.includes("CREATE SESSION");
    const hasSelect = ans.includes("SELECT");
    const hasOnJugadores = ans.includes("ON JUGADORES");
    const hasToUser = ans.includes("TO GESTION_NBA");
    
    isCorrect = hasGrant && (hasCreateSession || hasSelect) && hasToUser;
    msg = isCorrect ? "¡Correcto! Permisos otorgados con éxito." : "Sentencia incorrecta. Asegúrate de usar la sintaxis: GRANT [permisos] [ON objeto] TO [usuario]";
  } else if (num === 3) {
    // CREATE ROLE ADMIN_NBA
    isCorrect = ans === "CREATE ROLE ADMIN_NBA" || ans === "CREATE ROLE ADMIN_NBA;";
    msg = isCorrect ? "¡Correcto! Rol administrativo creado." : "Incorrecto. Sintaxis: CREATE ROLE nombre_rol";
  }

  // Update feedback and completion state
  feedbackEl.innerText = msg;
  feedbackEl.style.color = isCorrect ? "var(--accent-green)" : "var(--accent-red)";
  
  exerciseCompletion[`dcl${num}`] = isCorrect;
  updateProgressBar();
}

function checkNormAnswer() {
  const t1 = document.getElementById("norm-t1-input").value.trim().toLowerCase();
  const t2 = document.getElementById("norm-t2-input").value.trim().toLowerCase();
  const feedbackEl = document.getElementById("norm-feedback");
  
  // T1: EQUIPOS (nombre_equipo, ciudad)
  // T2: PARTIDOS (codigo_partido, equipo_local, puntos_local, equipo_visitante, puntos_visitante)
  const isT1Correct = t1.includes("equipo") && t1.includes("nombre") && t1.includes("ciudad");
  const isT2Correct = t2.includes("partido") && t2.includes("codigo") && t2.includes("local") && t2.includes("visitante") && !t2.includes("ciudad");
  
  const isCorrect = isT1Correct && isT2Correct;
  let msg = "";
  
  if (isCorrect) {
    msg = "¡Excelente! Has eliminado la dependencia transitiva de 'ciudad_local' respecto a 'codigo_partido' moviéndola a la tabla EQUIPOS. La base de datos está ahora en 3FN.";
    feedbackEl.style.color = "var(--accent-green)";
  } else {
    msg = "Aún no está en 3FN. Pistas:\n1. Crea una tabla para los EQUIPOS con su clave primaria y su ciudad.\n2. Deja en PARTIDOS los datos del encuentro y reemplaza la ciudad por la clave foránea del equipo local.";
    feedbackEl.style.color = "var(--accent-red)";
  }
  
  feedbackEl.innerText = msg;
  exerciseCompletion.norm = isCorrect;
  updateProgressBar();
}

// ==========================================
// Progress Calculation
// ==========================================

function updateProgressBar() {
  // Count how many exercises are resolved
  let solved = 0;
  
  // SQL
  exerciseCompletion.sql.forEach(s => { if (s) solved++; });
  // PLSQL
  exerciseCompletion.plsql.forEach(s => { if (s) solved++; });
  // DCL
  if (exerciseCompletion.dcl1) solved++;
  if (exerciseCompletion.dcl2) solved++;
  if (exerciseCompletion.dcl3) solved++;
  // Normalization
  if (exerciseCompletion.norm) solved++;
  
  const total = 20; // 7 SQL + 9 PLSQL + 3 DCL + 1 Normalization
  const pct = Math.round((solved / total) * 100);
  
  // Update UI Elements
  document.getElementById('global-progress-bar').style.width = `${pct}%`;
  document.getElementById('global-progress-percent').innerText = `${pct}%`;
  document.getElementById('dash-progress-text').innerText = `${solved}/${total}`;
}

// ==========================================
// Modal Interactivity & Code Comparison
// ==========================================

function openInstructionsModal() {
  const modal = document.getElementById("instructions-modal");
  modal.classList.add("active");
}

function closeInstructionsModal() {
  const modal = document.getElementById("instructions-modal");
  modal.classList.remove("active");
}

// Helper to clean code for comparison (ignoring case, whitespace, semicolons, comments)
function normalizeCode(code) {
  if (!code) return "";
  
  return code
    // Remove multi-line comments: /* ... */
    .replace(/\/\*[\s\S]*?\*\//g, "")
    // Remove single-line comments: -- ...
    .replace(/--.*$/gm, "")
    // Convert to uppercase
    .toUpperCase()
    // Replace all spacing sequences (newlines, tabs, spaces) with a single space
    .replace(/\s+/g, " ")
    // Remove trailing/leading spaces
    .trim()
    // Remove trailing semicolons
    .replace(/;+$/, "")
    .trim();
}

function compareCodes(codeA, codeB) {
  const normA = normalizeCode(codeA);
  const normB = normalizeCode(codeB);
  return normA === normB;
}

function openCompareModal() {
  // Hide instructions modal if open
  closeInstructionsModal();
  
  const userCode = sqlEditor.getValue();
  const ex = sqlExercises[activeSqlExerciseIndex];
  const refCode = ex.solution || "-- No hay solución";
  
  document.getElementById("compare-user-code").innerText = userCode;
  document.getElementById("compare-ref-code").innerText = refCode;
  
  const verdictEl = document.getElementById("compare-verdict");
  const isMatch = compareCodes(userCode, refCode);
  
  if (isMatch) {
    verdictEl.className = "compare-verdict-box match";
    verdictEl.innerHTML = `
      <svg style="width:18px;height:18px;" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>¡Coinciden! Tu código es funcionalmente equivalente a la solución de referencia.</span>`;
  } else {
    verdictEl.className = "compare-verdict-box mismatch";
    verdictEl.innerHTML = `
      <svg style="width:18px;height:18px;" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
      <span>Hay diferencias. Compara el código línea a línea. Ten en cuenta que puede haber formas alternativas correctas de resolver el ejercicio.</span>`;
  }
  
  const modal = document.getElementById("compare-modal");
  modal.classList.add("active");
}

function openPLSQLCompareModal() {
  const userCode = plsqlEditor.getValue();
  const ex = plsqlExercises[activePlsqlExerciseIndex];
  const refCode = ex.solution || "-- No hay solución";
  
  document.getElementById("compare-user-code").innerText = userCode;
  document.getElementById("compare-ref-code").innerText = refCode;
  
  const verdictEl = document.getElementById("compare-verdict");
  const isMatch = compareCodes(userCode, refCode);
  
  if (isMatch) {
    verdictEl.className = "compare-verdict-box match";
    verdictEl.innerHTML = `
      <svg style="width:18px;height:18px;" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>¡Coinciden! Tu código PL/SQL es funcionalmente equivalente a la solución de referencia.</span>`;
  } else {
    verdictEl.className = "compare-verdict-box mismatch";
    verdictEl.innerHTML = `
      <svg style="width:18px;height:18px;" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
      <span>Hay diferencias. Compara el bloque PL/SQL. Ten en cuenta que la declaración y asignación de variables puede variar.</span>`;
  }
  
  const modal = document.getElementById("compare-modal");
  modal.classList.add("active");
}

function closeCompareModal() {
  const modal = document.getElementById("compare-modal");
  modal.classList.remove("active");
}

// Toggle app sidebar collapsed state
function toggleSidebar() {
  const sidebar = document.getElementById("app-sidebar");
  if (sidebar) {
    sidebar.classList.toggle("collapsed");
    
    // Refresh CodeMirror editors immediately
    if (sqlEditor && typeof sqlEditor.refresh === "function") {
      sqlEditor.refresh();
    }
    if (plsqlEditor && typeof plsqlEditor.refresh === "function") {
      plsqlEditor.refresh();
    }
    
    // Refresh after transition completes to ensure accurate dimensions
    setTimeout(() => {
      if (sqlEditor && typeof sqlEditor.refresh === "function") {
        sqlEditor.refresh();
      }
      if (plsqlEditor && typeof plsqlEditor.refresh === "function") {
        plsqlEditor.refresh();
      }
    }, 250);
  }
}

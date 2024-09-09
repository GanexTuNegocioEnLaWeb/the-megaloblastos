const materias = [
  // Primer año
  {
    id: 1,
    name: "Formación Sociocultural Boliviana",
    sigla: "MAF 100",
    year: 1,
    semester: true,
    multigrupo: false,
    docentes: [
      { id: 34, name: "Rivero Bolívar Harold Percy" },
      { id: 59, name: "Lic. Reymi Ferreira" }
    ]
  },
  {
    id: 2,
    name: "Anatomía Humana",
    sigla: "MED 100",
    year: 1,
    semester: false,
    multigrupo: true,
    docentes: [
      { id: 1, name: "Aguilar Gonzales Oscar" },
      { id: 12, name: "Dorado Quesada Pedro Rodolfo" },
      { id: 29, name: "Pedraza Leaños Raúl" },
      { id: 37, name: "Sossa Lino José Luis" }
    ]
  },
  {
    id: 3,
    name: "Histología y Embriología",
    sigla: "MED 101",
    year: 1,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 16, name: "Iriarte Céspedes Norberto" },
      { id: 18, name: "Laguna Montaño Raúl Jhonny" },
      { id: 34, name: "Rivero Bolívar Harold Percy" },
      { id: 58, name: "Sánchez Araos Darío" },
      { id: 36, name: "Sangüeza Acosta Ariel Lionel" }
    ]
  },
  {
    id: 4,
    name: "Salud Pública 1",
    sigla: "SAP 100",
    year: 1,
    semester: true,
    multigrupo: false,
    docentes: [
      { id: 33, name: "Rivera Márquez Williams Pedro" },
      { id: 34, name: "Rivero Bolívar Harold Percy" }
    ]
  },
  // Segundo año
  {
    id: 5,
    name: "Bioquímica Médica",
    sigla: "MED 203",
    year: 2,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 15, name: "Hidalgo Filipavichi María Elizabeth" },
      { id: 30, name: "Pinto Guevara Yandira" },
      { id: 31, name: "Quiróz Peña Martha" }
    ]
  },
  {
    id: 6,
    name: "Fisiología Humana",
    sigla: "MED 202",
    year: 2,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 22, name: "Méndez Capovianco Alberto" },
      { id: 24, name: "Nogales Stresic Edmundo Hilario" },
      { id: 33, name: "Rivera Márquez Williams Pedro" }
    ]
  },
  {
    id: 7,
    name: "Anatomía Patológica",
    sigla: "MED 200",
    year: 2,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 20, name: "Machado Justiniano Juan José" },
      { id: 36, name: "Sangüeza Acosta Ariel Lionel" }
    ]
  },
  {
    id: 8,
    name: "Bacteriología y Virología Humana",
    sigla: "MED 201",
    year: 2,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 3, name: "Arauz Barba María Elena" },
      { id: 8, name: "Chely de Limpias Elizabeth" },
      { id: 38, name: "Tapia Ríos Carmela" }
    ]
  },
  {
    id: 9,
    name: "Parasitología y Micología Médica",
    sigla: "MED 209",
    year: 2,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 3, name: "Arauz Barba María Elena" },
      { id: 10, name: "Cuéllar Landívar Walter Hugo" },
      { id: 27, name: "Ortiz Céspedes Daniel" },
      { id: 31, name: "Quiróz Peña Martha" },
      { id: 35, name: "saavedra quintanilla juan A." }
    ]
  },
  {
    id: 10,
    name: "Salud Pública 2",
    sigla: "SAP 200",
    year: 2,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 19, name: "Leaños Hereria Hernán Omar" },
      { id: 45, name: "Tomas Virgilio Prieto Barrón" }
    ]
  },
  // Tercer año
  {
    id: 11,
    name: "Farmacología y Terapéutica",
    sigla: "MED 303",
    year: 3,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 11, name: "Dajer Ulloa Erika" },
      { id: 40, name: "Von Borries Kovac Hugo" }
    ]
  },
  {
    id: 12,
    name: "Cirugía 1",
    sigla: "CIR 305",
    year: 3,
    semester: false,
    multigrupo: true,
    docentes: [
      { id: 1, name: "Aguilar Gonzales Oscar" },
      { id: 9, name: "Coronado Guzmán Jorge" }
    ]
  },
  {
    id: 13,
    name: "Fisiopatología",
    sigla: "MED 301",
    year: 3,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 2, name: "Aguilar Justiniano Javier Oscar" },
      { id: 12, name: "Dorado Quesada Pedro Rodolfo" },
      { id: 21, name: "Maida Vargas de Morales Tatiana" }
    ]
  },
  {
    id: 14,
    name: "Semiología General",
    sigla: "MED 302",
    year: 3,
    semester: false,
    multigrupo: true,
    docentes: [
      { id: 4, name: "Arce Justiniano Jorge Ronald" },
      { id: 28, name: "Panoso Gonzales Katty Olivia" },
      { id: 39, name: "Terrazas Gómez Héctor Mirko" }
    ]
  },
  {
    id: 15,
    name: "Infectología y Medicina Tropical",
    sigla: "MED 304",
    year: 3,
    semester: false,
    multigrupo: true,
    docentes: [
      { id: 35, name: "Saavedra Quintanilla Juan A." }
    ]
  },
  {
    id: 16,
    name: "Salud Pública 3",
    sigla: "SAP 300",
    year: 3,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 22, name: "Méndez Capovianco Alberto" },
      { id: 58, name: "Sánchez Araos Darío" },
      { id: 41, name: "Zambrana Balladares Lilian" }
    ]
  },
  // Cuarto año
  {
    id: 17,
    name: "Anestesiología",
    sigla: "MED 403",
    year: 4,
    semester: true,
    multigrupo: false,
    docentes: [
      { id: 25, name: "Oropeza Claure José Adolfo" },
      { id: 7, name: "Carlos Iván Quiroga" }
    ]
  },
  {
    id: 18,
    name: "Oftalmología",
    sigla: "CIR 402",
    year: 4,
    semester: true,
    multigrupo: false,
    docentes: [
      { id: 23, name: "Molina Mery Rafael" }
    ]
  },
  {
    id: 19,
    name: "Cirugía 2",
    sigla: "CIR 400",
    year: 4,
    semester: false,
    multigrupo: true,
    docentes: [
      { id: 5, name: "Aponte Vargas José Luis" },
      { id: 14, name: "Flores Reus Ral Eduardo" },
      { id: 57, name: "Vargas Vanegas Reinerio" },
      { id: 56, name: "Viruez Soleto Erwin" }
      // este no da multigrupo
    ]
  },
  {
    id: 20,
    name: "Traumatología y Ortopedia",
    sigla: "CIR 401",
    year: 4,
    semester: true,
    multigrupo: false,
    docentes: [
      { id: 29, name: "Pedraza Leaños Raúl" },
      { id: 55, name: "Edgar Sempertegui" }
    ]
  },
  {
    id: 21,
    name: "Medicina Interna 1",
    sigla: "MED 400",
    year: 4,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 54, name: "Javier Alfredo Alcazar Almeida" },
      { id: 53, name: "Omar Montero Gandarilla" },
      { id: 52, name: "Germán Toledo" }
    ]
  },
  {
    id: 22,
    name: "Neurología",
    sigla: "MED 405",
    year: 4,
    semester: true,
    multigrupo: false,
    docentes: [
      { id: 49, name: "salas ferrufino gueider" },
      { id: 26, name: "Osinaga García Remberto" }
    ]
  },
  {
    id: 23,
    name: "Psicopatología",
    sigla: "MED 415",
    year: 4,
    semester: true,
    multigrupo: false,
    docentes: [
      { id: 42, name: "David schusselberg chavez" },
      { id: 43, name: "Elva Soto Sanchez de Montero" }
    ]
  },
  {
    id: 24,
    name: "Dermatología",
    sigla: "MED 413",
    year: 4,
    semester: true,
    multigrupo: false,
    docentes: [
      { id: 44, name: "Maria Pavez Lizarraga de Aranzazu" }
    ]
  },
  {
    id: 25,
    name: "Salud Pública 4",
    sigla: "SAP 400",
    year: 4,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 45, name: "Tomas Virgilio Prieto Barron" }
    ]
  },
  // Quinto año
  {
    id: 26,
    name: "Cirugía 3",
    sigla: "CIR 500",
    year: 5,
    semester: false,
    multigrupo: true,
    docentes: [
      { id: 5, name: "Aponte Vargas José Luis" },
      { id: 14, name: "Flores Reus Ral Eduardo" },
      { id: 57, name: "Vargas Vanegas Reinerio" },
      { id: 56, name: "Viruez Soleto Erwin" },
      { id: 62, name: "Jorge Fernando Aparicio" }
      // este no es multigrupo
    ]
  },
  {
    id: 27,
    name: "Ginecología y Obstetricia",
    sigla: "CIR 505",
    year: 5,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 46, name: "Edgar Caballero Ibañez" },
      { id: 13, name: "Encinas Justiniano Leoncio" },
      { id: 47, name: "Jesus Rodolfo Serrano" }
    ]
  },
  {
    id: 28,
    name: "Pediatría",
    sigla: "MED 504",
    year: 5,
    semester: false,
    multigrupo: true,
    docentes: [
      { id: 6, name: "Bolívar Guzmán Rubén Darío" },
      { id: 32, name: "Rivas Soruco Felipe" }
    ]
  },
  {
    id: 29,
    name: "Medicina Interna 2",
    sigla: "MED 500",
    year: 5,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 51, name: "Victor Hugo Vargas Pereira" },
      { id: 50, name: "Marcelo Mendez Rosales" },
      { id: 60, name: "wilfredo anzoategui" },
      { id: 61, name: "grover aguilar" }
    ]
  },
  {
    id: 30,
    name: "Otorinolaringología",
    sigla: "CIR 506",
    year: 5,
    semester: true,
    multigrupo: false,
    docentes: [
      { id: 17, name: "israel araujo yuself jail" }
    ]
  },
  {
    id: 31,
    name: "Psiquiatría y Salud Mental",
    sigla: "MED 501",
    year: 5,
    semester: true,
    multigrupo: false,
    docentes: [
      { id: 42, name: "David schusselberg chavez" },
      { id: 48, name: "Elba soto Sanchez" }
    ]
  },
  {
    id: 32,
    name: "Medicina Legal",
    sigla: "MED 508",
    year: 5,
    semester: false,
    multigrupo: false,
    docentes: [
      { id: 49, name: "Haroldo Mendez de la Fuente" }
    ]
  }
];

export { materias as m };

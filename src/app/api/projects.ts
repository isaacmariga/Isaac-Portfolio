export class Projects {
  constructor(
    public name: string,
    details: string,
    language: number,
    framework: number,
    tools: number,
    database: number,
    image: string
  ) {}
}
export class Tools {
  constructor(public tool: string, id: number) {}
}

export class Framework {
  constructor(public framework: string, id: number) {}
}

export class Database {
  constructor(public database: string, id: number) {}
}

export class Language {
  constructor(public language: string, id: number) {}
}

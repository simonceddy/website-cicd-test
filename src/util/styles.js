export class RGBA {
  vals = {
    r: 0,
    g: 0,
    b: 0,
    a: null
  };

  constructor(r, g, b, a = null) {
    this.vals.r = r || 0;
    this.vals.g = g || r || 0;
    this.vals.b = b || r || 0;
    this.vals.a = a || null;
  }

  get r() {
    return this.vals.r;
  }

  set r(val) {
    if (typeof val === 'number'
      && val >= 0
      && val <= 255
    ) {
      this.vals.r = val;
    }
  }

  get g() {
    return this.vals.g;
  }

  set g(val) {
    if (typeof val === 'number'
      && val >= 0
      && val <= 255
    ) {
      this.vals.g = val;
    }
  }

  get b() {
    return this.vals.b;
  }

  set b(val) {
    if (typeof val === 'number'
      && val >= 0
      && val <= 255
    ) {
      this.vals.b = val;
    }
  }

  toString() {
    return `rgba(${this.vals.r}, ${this.vals.g}, ${this.vals.b}${this.vals.a ? `, ${this.vals.a}` : ''})`;
  }
}

export function rgba(r, g = null, b = null, a = null) {
  return new RGBA(r, g, b, a);
}

export function randRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return rgba(r, g, b);
}

export function randShadows() {
  return [
    randRgb(),
    randRgb(),
    randRgb(),
    randRgb(),
    randRgb(),
    randRgb(),
    randRgb(),
  ];
}

export const header1Shadow = [
  rgba(93),
  rgba(143),
  rgba(172),
  rgba(195),
  rgba(172),
  rgba(143),
  rgba(93),
];
export const header2Shadow = [
  rgba(93),
  rgba(143),
  rgba(172),
  rgba(195),
  rgba(172),
  rgba(143),
  rgba(93),
];

export function shadowStyle(bits = []) {
  const str = bits.map((colour, id) => `${id + 1}px ${id + 1}px ${colour?.toString()}`);

  return str.join(', ');
}

export interface Component {
  name: string;
  slug: string;
  category: string;
  ascii: string;
  description: string;
  sizing: string;
  source: string;
}

export interface Layout {
  name: string;
  slug: string;
  category: string;
  categoryLabel: string;
  description: string;
  prompt: string;
  ascii: string;
}

export type Category = {
  id: string;
  label: string;
  count: number;
};

export interface Style {
  name: string;
  slug: string;
  category: string;
  categoryLabel: string;
  description: string;
  style: string;
  avoid: string;
}

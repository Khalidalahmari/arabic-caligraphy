export type contentType = {
  header: {
    nav: {
      title: string;
      href: string;
    }[];
    button: string;
  };
  hero: {
    title: string;
    title2: string;
    description: string;
    button1: string;
    button2: string;
  };
  ourGoals: {
    title: string;
    title2: string;
    goals: {
      title: string;
      description: string;
      button: string;
      image: string;
    }[];
  };
  testimonial: {
    title: string;
    description: string;
    button: string;
    testimonials: {
      comment: string;
      applicant: {
        name: string;
        job: string;
      };
    }[];
  };
  joinNow: {
    title: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    coordinates: {
      lat: number;
      lng: number;
      zoom: number;
    };
  };
};

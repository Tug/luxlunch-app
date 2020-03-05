
export class Article {
  constructor(title,
              description,
              content,
              image,
              date,
              author,
              likes,
              comments) {
      this.title = title;
      this.description = description;
      this.content = content;
      this.image = image;
      this.date = date;
      this.author = author;
      this.likes = likes;
      this.comments = comments;
  }

  static howToEatHealthy() {
    return new Article(
      'Cocottes',
      'Fresh & Home Made Food',
      '',
      require('../assets/cocottes1.jpg'),
      'A 5 minutes',
       new Profile(
          'Restaurant',
          '(Ouvre à 11h30)',
      ),
      [],
      [],
    );
  }

  static whyWorkoutImportant() {
    return new Article(
      'Victorine',
      'CUISINE URBAINE',
      '',
      require('../assets/victorine1.jpg'),
      'A 12 minutes',
        new Profile(
            'Restaurant',
            '(Ouvert)',
        ),
      [
      ],
      [
      ],
    );
  }

  static morningWorkouts() {
    return new Article(
      'BAZAAR',
      'Lieu convivial',
      '',
      require('../assets/bazaar1.jpg'),
      'A 18 minutes',
        new Profile(
            'Bar et Restaurant',
            '(Ouvre à 11h30)',
        ),
      [
      ],
      [
      ],
    );
  }
}

export class Like {

  constructor(author) {
    this.author = author;
  }

  static byMarkVolter() {
    return new Like(
      Profile.markVolter(),
    );
  }

  static byHubertFranck() {
    return new Like(
      Profile.hubertFranck(),
    );
  }
}

export class Comment {

  constructor(text,
              date,
              author,
              comments,
              likes) {
      this.text = text;
      this.date = date;
      this.author = author;
      this.comments = comments;
      this.likes = likes;
  }

  static byHubertFranck() {
    return new Comment(
      'This very useful information for me Thanks for your article!',
      'Today 11:10 am',
      Profile.hubertFranck(),
      [
        Comment.byMarkVolter(),
      ],
      [
        Like.byMarkVolter(),
      ],
    );
  }

  static byMarkVolter() {
    return new Comment(
      'Thanks!',
      'Today 11:10 am',
      Profile.hubertFranck(),
      [],
      [],
    );
  }

}

export class Profile {

  constructor(firstName,
              lastName,
              photo) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.photo = photo;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static markVolter() {
    return new Profile(
      'Mark',
      'Volter',
      require('../assets/image-profile.jpg'),
    );
  }

  static hubertFranck() {
    return new Profile(
      'Hubert',
      'Franck',
      require('../assets/image-profile.jpg'),
    );
  }
}


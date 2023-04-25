# Data layer

## Data

- A collection of Star Wars characters that must have the CharacterStructure shape.

- Each character would be an object with a CharacterStructure interface :

  - id
  - name
  - picture
  - height
  - mass
  - creation date

## Data modifications

- Load list of characters
- Remove a character form the characters collection

## Components

### App

- State: The collection of character
- Modifications :

  - Remove a character from the character collection

### List

- Receives a prop with a CharacterCard

### CharacterCard

- Receives a prop with a character
- Receives a prop with the action remove

### Button

- Receives a prop with the action on click
- Receives a prop with the text

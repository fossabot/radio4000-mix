import React from 'react';

export default function Deck(props) {
  const { radioSlug, volumeDeck } = props;
  return (
    <article className="Deck">
      <radio4000-player className="Deck-player"
			channel-slug={ radioSlug }
			volume={ volumeDeck }></radio4000-player>
    </article>
  )
}

for GENRE in classical jazz
do
  sed "s/?GENRE?/$GENRE/g" template.html > $GENRE.html
done

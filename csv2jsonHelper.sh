ORIGIN_FILE=$1
DEST_FILE=$2

touch $DEST_FILE
echo  '{"data" :' >> $DEST_FILE
cat $ORIGIN_FILE >> $DEST_FILE
echo  '}' >> $DEST_FILE
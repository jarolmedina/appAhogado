   keytool -genkey -v -noprompt \
   -alias appAhogado \
   -dname "CN=Carlos, OU=Ingeniero, O=UPB, L=Medellín, S=Antioquia, C=0554" \
   -keystore almacenLlaves.keystore \
   -storepass 123456 \
   -keypass 123456 \
   -keyalg RSA \
   -keysize 2048 \
   -validity 10000
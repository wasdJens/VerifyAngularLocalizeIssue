This is a sample repo to test the angular i18n features.

* **angular-localize-issue** Is an example angular library (V11) 
* **test-localize-app** Is an example angular app (V11)
* **test-localize-app-angular-old** Is an example angular app (V10)

To test follow these steps: 

```shell
# Run npm install in all three projects
npm i

# Build the library  FOLDER: angular-localize-issue
ng build --prod

# locally link the library FOLDER: angular-localize-issue
cd dist
cd test-lib
npm link
pwd # copy path

# install the library in each application
npm i file:<lib path>


# extract the i18n messages.xlf file
ng xi18n # for angular 10
ng extract-i18n # for angular 11
```
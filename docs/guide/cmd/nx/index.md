# NX Schematics

[[_TOC_]]

## Main generators

### Create a Nx:js:library with swc

```bash
yarn run nx generate @nx/js:lib --name=event --bundler=swc --directory=business --importPath=@clearsight/business-event --publishable --strict --tags=business/event --unitTestRunner=jest --linter=eslint --projectNameAndRootFormat=derived
```

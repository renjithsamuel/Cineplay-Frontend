import {
  Box,
  Button,
  Dialog,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useLoginDialogStyles } from "./LoginDialog.styles";
import { themeValues } from "@/cineplay/lib/constants/ThemeConstants";
import { useLoginDialog } from "./LoginDialog.hooks";
import { Formik, Form, Field } from "formik";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { Role } from "@/cineplay/lib/constants/Role";

interface loginDialogParams {}

export const LoginDialog = ({}: loginDialogParams) => {
  const {
    isLogin,
    fullScreen,
    openDialog,
    handleCloseDialog,
    handleSwitchLoginRegister,
    initialValues,
    validationSchema,
    isVisible,
    handleSubmit,
    handlePasswordVisiblity,
  } = useLoginDialog({});
  const classes = useLoginDialogStyles();
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={openDialog}
        // onClose={handleCloseDialog}
        aria-labelledby="responsive-dialog-title"
        sx={{ backdropFilter: "blur(2px)" }}
      >
        {/* register */}
        <Box className={classes.loginWrap}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: themeValues.font.fontWeightThick,
              userSelect: "none",
            }}
          >
            {!isLogin ? "Please Register" : "Please Login"}
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            style={{ width: "30vw" }}
          >
            {/* login */}
            {isLogin
              ? ({ errors, touched, isValid, values }: any) => (
                  <Form
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Field
                      className={classes.textField}
                      as={TextField}
                      label="Username"
                      name="username"
                      fullWidth
                      InputLabelProps={{ shrink: values.username }}
                      value={values.username}
                      error={touched.username && !!errors.username}
                      helperText={touched.username && errors.username}
                    />
                    <Field
                      className={classes.textField}
                      as={TextField}
                      label="Password"
                      name="password"
                      value={values.password}
                      type={!isVisible ? "password" : "text"}
                      InputProps={{
                        shrink: values.password,
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{
                              "&:hover": {
                                cursor: "pointer",
                              },
                            }}
                            onClick={handlePasswordVisiblity}
                          >
                            {isVisible ? <AiFillEyeInvisible /> : <IoEye />}
                          </InputAdornment>
                        ),
                      }}
                      error={touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                      fullWidth
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      className={classes.loginButton}
                      disabled={!isValid}
                    >
                      Login
                    </Button>
                  </Form>
                )
              : // register
                ({ errors, touched, isValid, values }: any) => (
                  <Form
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    {RegisterParams.map((param) => (
                      <>
                        {param.keyForDB === "password" ? (
                          <Field
                            className={classes.textField}
                            as={TextField}
                            label={param.inputPlaceHolder}
                            name={param.keyForDB}
                            value={values[param.keyForDB]}
                            type={!isVisible ? param.inputType : "text"}
                            InputProps={{
                              shrink: values[param.keyForDB],
                              endAdornment: (
                                <InputAdornment
                                  position="end"
                                  sx={{
                                    "&:hover": {
                                      cursor: "pointer",
                                    },
                                  }}
                                  onClick={handlePasswordVisiblity}
                                >
                                  {isVisible ? (
                                    <AiFillEyeInvisible />
                                  ) : (
                                    <IoEye />
                                  )}
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                            error={
                              touched[param.keyForDB] &&
                              !!errors[param.keyForDB]
                            }
                            helperText={
                              touched[param.keyForDB] && errors[param.keyForDB]
                            }
                          />
                        ) : (
                          <Field
                            className={classes.textField}
                            as={TextField}
                            label={param.inputPlaceHolder}
                            name={param.keyForDB}
                            type={param.inputType}
                            value={values[param.keyForDB]}
                            fullWidth
                            InputLabelProps={{ shrink: values[param.keyForDB] }}
                            error={
                              touched[param.keyForDB] &&
                              !!errors[param.keyForDB]
                            }
                            helperText={
                              touched[param.keyForDB] && errors[param.keyForDB]
                            }
                          />
                        )}
                      </>
                    ))}
                    <Button
                      type="submit"
                      variant="contained"
                      className={classes.loginButton}
                      disabled={!isValid}
                    >
                      Signup
                    </Button>
                  </Form>
                )}
          </Formik>
          <Typography
            variant="body1"
            className={classes.switcher}
            onClick={handleSwitchLoginRegister}
            sx={{ userSelect: "none" }}
          >
            {isLogin ? "Don't have an Account?" : "Already Registered?"}
          </Typography>
        </Box>
      </Dialog>
    </>
  );
};

export const RegisterParams = [
  {
    keyForDB: "username",
    inputLabel: "username : ",
    inputPlaceHolder: "Username",
    inputType: "text",
  },
  {
    keyForDB: "email",
    inputLabel: "email : ",
    inputPlaceHolder: "Email",
    inputType: "email",
  },
  {
    keyForDB: "password",
    inputLabel: "Password : ",
    inputPlaceHolder: "Password",
    inputType: "password",
  },
];

import { View, StyleSheet, Text, TextInput, Pressable } from "react-native"
import Header from "../components/AddTodo/Header"
import CustomText from "../components/ui/CustomText"
import Sizes from "../constants/Sizes"
import DatePicker from "../components/AddTodo/DatePicker"
import TimePicker from "../components/AddTodo/TimePicker"
import IconCircle from "../components/ui/IconCircle";
import { ErrorMessage, Formik } from "formik"
import Button from "../components/ui/Button"
import * as yup from "yup"

const validationSchema = yup.object().shape({
    title: yup.string().required("Title cannot be blank"),
    date: yup.string().required("Date cannot be blank"),
    time: yup.string().required("Time cannot be blank"),
    note: yup.string().required("Note cannot be blank"),
    category: yup.string().required("Category cannot be blank"),
})
export default function AddTodo({ setAddTodo }) {

    return <Formik
        validationSchema={validationSchema}
        onSubmit={(val) => console.log(val)}
        initialValues={{
            title: "",
            date: "",
            time: "",
            note: "",
            category: ""
        }}
    >
        {({ handleChange, handleBlur, values, handleSubmit, setFieldValue, errors, touched }) =>
            <View style={styles.mainContainer}>
                <Header onCloseHandler={() => setAddTodo(prev => !prev)} />
                <View style={styles.contentContainer}>
                    <View style={styles.textInputContainer}>
                        <CustomText style={styles.inputLabel}>Task title</CustomText>
                        <TextInput
                            onChangeText={handleChange("title")}
                            onBlur={handleBlur("title")}
                            value={values.title}
                            placeholderTextColor={"#1B1B1D"}
                            placeholder="Task Title"
                            style={styles.textInput}
                        />
                        <ErrorMessage name="title">{msg => <Text style={styles.error}>{msg}</Text>}</ErrorMessage>
                    </View>

                    <View style={[styles.categoryContainer, styles.textInputContainer]}>
                        <CustomText style={styles.inputLabel}>Category</CustomText>
                        <View style={styles.categoryIcons}>
                            <Pressable
                                onPress={() => setFieldValue("category", "note")}
                                style={{ opacity: values.category === "note" ? 1 : 0.2 }}>
                                <View style={styles.categoryIcon}>
                                    <IconCircle />
                                </View>
                            </Pressable>

                            <Pressable
                                onPress={() => setFieldValue("category", "calendar")}
                                style={{ opacity: values.category === "calendar" ? 1 : 0.2 }}>
                                <View style={styles.categoryIcon}>
                                    <IconCircle type="calendar" />
                                </View>
                            </Pressable>

                            <Pressable
                                onPress={() => setFieldValue("category", "trophy")}
                                style={{ opacity: values.category === "trophy" ? 1 : 0.2 }}>
                                <View style={styles.categoryIcon}>
                                    <IconCircle type="trophy" />
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    {/* <ErrorMessage name="category">{msg => <Text style={styles.error}>{msg}</Text>}</ErrorMessage> */}

                    <View style={styles.textInputContainer}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ width: "48%" }}>
                                <CustomText style={styles.inputLabel}>Date</CustomText>
                                <DatePicker value={values.date} onChange={(date) => setFieldValue("date", date)} />
                                <ErrorMessage name="date">{msg => <Text style={styles.error}>{msg}</Text>}</ErrorMessage>
                            </View>
                            <View style={{ width: "48%" }}>
                                <CustomText style={styles.inputLabel}>Time</CustomText>
                                <TimePicker value={values.time} onChange={(time) => setFieldValue("time", time)} />
                                <ErrorMessage name="time">{msg => <Text style={styles.error}>{msg}</Text>}</ErrorMessage>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.textInputContainer, { zIndex: -1 }]}>
                        <CustomText style={styles.inputLabel}>Notes</CustomText>
                        <TextInput
                            onChangeText={handleChange("note")}
                            onBlur={handleBlur("note")}
                            value={values.note}
                            multiline={true}
                            placeholderTextColor={"#1B1B1D"}
                            placeholder="Notes"
                            style={[styles.textInput, styles.textInputArea]}
                        />
                        <ErrorMessage name="note">{msg => <Text style={styles.error}>{msg}</Text>}</ErrorMessage>
                    </View>
                    <Button style={{ zIndex: -1 }} onPress={handleSubmit}>Submit</Button>
                </View>
            </View>}

    </Formik>
}


const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        flexDirection: 'column'
    },
    contentContainer: {
        padding: Sizes.padding200,
        flexGrow: 1,
        flexDirection: 'column'
    },
    inputLabel: {
        marginBottom: 6
    },
    textInputContainer: {
        marginBottom: 20
    },
    textInput: {
        borderColor: "#E0E0E0",
        borderWidth: 1,
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 12,
        textAlignVertical: "center",
        fontFamily: "inter",
        color: "#1B1B1D"
    },
    textInputArea: {
        borderColor: "#E0E0E0",
        borderWidth: 1,
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 12,
        height: 120,
    },
    categoryIcons: {
        flexDirection: "row",
        marginLeft: 20
    },
    categoryIcon: {
        marginLeft: 10
    },
    categoryContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    error: {
        color: "red",
        fontSize: 12,
        marginTop: 4,
        zIndex: -111
    }
})

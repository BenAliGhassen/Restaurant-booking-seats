import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from 'yup';
import React, { useEffect, useState } from 'react';

const initial_Values = {
    Date: "",
    Time: "11:00",
    Number: 1,
    Occasion: "Birthday",
};

const schema = yup.object().shape({
    Date: yup.date().min(new Date(), "You cant't Book a table in the past").required("Please Select a date"),
});

export const Bookinform = ({ freeTime, popfreetime, setDate }) => {
    
    const booking_table = [];

    return (
        <section className="form_container">
            <Formik
                initialValues={initial_Values}
                validationSchema={schema}
                onSubmit={(values) => {
                    booking_table.push(values);
                    console.log(booking_table);
                    popfreetime(values.Time);
                }}
            >
                {({ values }) => (
                    <Form id="form">
                        <label htmlFor="res-date" className="label">
                            Choose date
                        </label>
                        <Field type="date" name="Date" id="res-date" value={values.Date} />
                        <ErrorMessage name="Date" component="p" id="Error_msg" />
                        <label htmlFor="res-time" className="label">
                            Choose time
                        </label>
                        <Field as="select" name="Time" id="res-time">
                            {setDate(values.Date)}
                            {Array.isArray(freeTime) ? (
                                freeTime.map((times) => {       
                                    return (
                                        <option value={times} key={times}>
                                            {times}
                                        </option>
                                    );
                                })
                            ) : (
                                <p>No available times</p>
                            )}
                        </Field>
                        <label htmlFor="guests" className="label">
                            Number of guests
                        </label>
                        <Field
                            type="number"
                            name="Number"
                            placeholder="1"
                            min="1"
                            max="12"
                            id="guests"
                        />
                        <label htmlFor="occasion" className="label">
                            Occasion
                        </label>
                        <Field as="select" name="Occasion" id="occasion">
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </Field>
                        <button type="submit" id="submit_btn">
                            Make your reservation
                        </button>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

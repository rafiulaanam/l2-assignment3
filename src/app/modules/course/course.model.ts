// src/models/course.model.ts

import { Schema, model } from 'mongoose';
import { CourseDetails, TCourse, Tag } from './course.interface';



const tagSchema = new Schema<Tag>({
  name: String,
  isDeleted: Boolean,
});

const courseDetailsSchema = new Schema<CourseDetails>({
  level: String,
  description: String,
});

const courseSchema = new Schema<TCourse>({
  title: String,
  instructor: String,
  categoryId: String,
  price: Number,
  tags: [tagSchema],
  startDate: String,
  endDate: String,
  language: String,
  provider: String,
  durationInWeeks: Number,
  details: courseDetailsSchema,
});



export const CourseModel = model<TCourse>('Course', courseSchema);



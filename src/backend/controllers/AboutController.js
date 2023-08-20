import { Response } from "miragejs";

/**
 * All the routes related to About are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets about information
 * send GET Request at /api/about
 * */

export const getAboutHandler = function () {
  return new Response(200, {}, { data: {
        name: "Mae Wang",
        location: "Yokohama, Japan",
        nationality: "Taiwan",
        self_introduction: "Hi ! I am a freelance chrocheter, welcome to my personal site!"
  } });
};

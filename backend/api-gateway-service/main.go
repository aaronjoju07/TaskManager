package main

import (
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"
)

// NewProxy creates a reverse proxy for the given target URL
func NewProxy(target string) (*httputil.ReverseProxy, error) {
	url, err := url.Parse(target)
	if err != nil {
		return nil, err
	}
	return httputil.NewSingleHostReverseProxy(url), nil
}

// ProxyHandler sets up the proxy handler with path rewriting
func ProxyHandler(proxy *httputil.ReverseProxy, prefix string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		r.URL.Path = strings.TrimPrefix(r.URL.Path, prefix)
		proxy.ServeHTTP(w, r)
	}
}

func main() {
	// Hardcoded service URLs
	userServiceURL := "http://host.docker.internal:3001"
	taskServiceURL := "http://host.docker.internal:3002"
	projectServiceURL := "http://host.docker.internal:3003"
	notificationServiceURL := "http://host.docker.internal:3004"
	reportingServiceURL := "http://host.docker.internal:3005"
	

	// Create proxies
	userProxy, err := NewProxy(userServiceURL)
	if err != nil {
		log.Fatalf("Could not create proxy for User Service: %v", err)
	}
	taskProxy, err := NewProxy(taskServiceURL)
	if err != nil {
		log.Fatalf("Could not create proxy for Task Service: %v", err)
	}
	projectProxy, err := NewProxy(projectServiceURL)
	if err != nil {
		log.Fatalf("Could not create proxy for Project Service: %v", err)
	}
	notificationProxy, err := NewProxy(notificationServiceURL)
	if err != nil {
		log.Fatalf("Could not create proxy for Notification Service: %v", err)
	}
	reportingProxy, err := NewProxy(reportingServiceURL)
	if err != nil {
		log.Fatalf("Could not create proxy for Reporting Service: %v", err)
	}

	// Setup routes with path rewriting
	http.HandleFunc("/users/", ProxyHandler(userProxy, "/users"))
	http.HandleFunc("/tasks/", ProxyHandler(taskProxy, "/tasks"))
	http.HandleFunc("/projects/", ProxyHandler(projectProxy, "/projects"))
	http.HandleFunc("/notifications/", ProxyHandler(notificationProxy, "/notifications"))
	http.HandleFunc("/reports/", ProxyHandler(reportingProxy, "/reports"))

	// Start the server on port 3000
	port := "3000"

	log.Printf("API Gateway is running on port %s", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
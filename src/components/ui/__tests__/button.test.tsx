import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../button";

describe("Button Component", () => {
  it("renders with default variant", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-foreground");
  });

  it("renders with secondary variant", () => {
    render(<Button variant="secondary">Secondary Style</Button>);
    const button = screen.getByRole("button", { name: /secondary style/i });
    expect(button).toHaveClass("bg-secondary");
  });

  it("renders with pixel variant", () => {
    render(<Button variant="pixel">Pixel Button</Button>);
    const button = screen.getByRole("button", { name: /pixel button/i });
    expect(button).toHaveClass("rounded-none");
    expect(button).toHaveClass(
      "shadow-[4px_4px_0px_0px_theme(colors.foreground)]"
    );
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);

    const button = screen.getByRole("button", { name: /clickable/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-10");

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-14");
  });

  it("can be disabled", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:pointer-events-none");
  });

  it("renders as different element when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/link">Link Button</a>
      </Button>
    );

    const link = screen.getByRole("link", { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/link");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button", { name: /custom/i });
    expect(button).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Button ref={ref}>Ref Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  describe("All variants", () => {
    it("renders destructive variant", () => {
      render(<Button variant="destructive">Destructive</Button>);
      const button = screen.getByRole("button", { name: /destructive/i });
      expect(button).toHaveClass("bg-destructive");
    });

    it("renders outline variant", () => {
      render(<Button variant="outline">Outline</Button>);
      const button = screen.getByRole("button", { name: /outline/i });
      expect(button).toHaveClass(
        "border-2",
        "border-foreground",
        "bg-background"
      );
    });

    it("renders ghost variant", () => {
      render(<Button variant="ghost">Ghost</Button>);
      const button = screen.getByRole("button", { name: /ghost/i });
      expect(button).toHaveClass("hover:bg-accent");
    });

    it("renders link variant", () => {
      render(<Button variant="link">Link</Button>);
      const button = screen.getByRole("button", { name: /link/i });
      expect(button).toHaveClass("text-primary", "underline-offset-4");
    });
  });

  describe("All sizes", () => {
    it("renders default size", () => {
      render(<Button size="default">Default Size</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-12", "px-6", "py-3");
    });

    it("renders icon size", () => {
      render(<Button size="icon">Icon</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-12", "w-12");
    });
  });

  describe("Accessibility", () => {
    it("is focusable by default", () => {
      render(<Button>Focusable</Button>);
      const button = screen.getByRole("button");
      expect(button).not.toHaveAttribute("tabIndex", "-1");
    });

    it("has proper focus styles", () => {
      render(<Button>Focus Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "focus-visible:outline-none",
        "focus-visible:ring-2"
      );
    });
  });
});
